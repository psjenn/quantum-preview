type Mode = 'hero' | 'band';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

// Motion stops within 5s (WCAG 2.2.2).
const CRUISE = 2.5;
const RUN = 4.5;

// Brand gradient: cobalt → cyan → Quantum green, from the Q mark.
const BLUE = [45, 92, 255];
const CYAN = [25, 198, 217];
const GREEN = [176, 248, 85];
const SPLIT = 0.8;

// Dots are batched into one path per (colour, alpha) step, so a frame is a few
// hundred fills instead of one per dot. Steps are too fine to see.
const HUES = 24;
const ALPHAS = 12;
const STYLES: string[] = [];
for (let c = 0; c < HUES; c++) {
  const m = c / (HUES - 1);
  const [from, to, s] = m < SPLIT ? [BLUE, CYAN, m / SPLIT] : [CYAN, GREEN, (m - SPLIT) / (1 - SPLIT)];
  const rgb = from.map((f, i) => Math.round(lerp(f, to[i], s))).join(',');
  for (let a = 0; a < ALPHAS; a++) STYLES.push(`rgba(${rgb},${(0.25 + (0.75 * a) / (ALPHAS - 1)).toFixed(3)})`);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function mount(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const mode = (canvas.dataset.field as Mode) || 'hero';
  let w = 0;
  let h = 0;
  let dpr = 1;
  let visible = true;
  let raf = 0;
  let elapsed = 0;
  let clock = 0;
  let last = 0;
  let gap = 15;

  // Per-dot data that only changes on resize. Dots that can never reach
  // visible size are dropped here rather than skipped every frame.
  let n = 0;
  let xs = new Float32Array(0);
  let ys = new Float32Array(0);
  let amp = new Float32Array(0);
  let hue = new Uint8Array(0);
  let row = new Uint16Array(0);
  let rowWave = new Float32Array(0);
  let rs = new Float32Array(0);
  let bucket = new Uint16Array(0);
  let order = new Uint32Array(0);
  const counts = new Uint32Array(HUES * ALPHAS + 1);

  const size = () => {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = r.width;
    h = r.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    gap = w < 640 ? 12 : 15;
    const maxR = gap * 0.46;
    const cols = Math.max(0, Math.ceil((w - gap / 2) / gap));
    const rows = Math.max(0, Math.ceil((h - gap / 2) / gap));
    const cap = cols * rows;
    xs = new Float32Array(cap);
    ys = new Float32Array(cap);
    amp = new Float32Array(cap);
    hue = new Uint8Array(cap);
    row = new Uint16Array(cap);
    rowWave = new Float32Array(rows);
    n = 0;
    for (let j = 0; j < rows; j++) {
      const y = gap / 2 + j * gap;
      for (let i = 0; i < cols; i++) {
        const x = gap / 2 + i * gap;
        const u = x / w;
        const v = y / h;
        let fade: number;
        if (mode === 'hero') {
          const edge = w < 720 ? 0.05 : 0.38;
          fade = Math.max(0, Math.min(1, (u - edge) / (1 - edge)));
          fade = fade * fade * (3 - 2 * fade);
          fade *= Math.max(0, 1 - v * 0.95);
          if (w < 720) fade *= 0.45;
        } else {
          fade = Math.max(0, 1 - u / 0.45);
          fade = 0.55 * fade * fade * (3 - 2 * fade);
        }
        if (maxR * fade < 0.35) continue;
        const m = mode === 'hero' ? u : v;
        xs[n] = x;
        ys[n] = y;
        amp[n] = maxR * fade;
        hue[n] = Math.round(Math.max(0, Math.min(1, m)) * (HUES - 1));
        row[n] = j;
        n++;
      }
    }
    rs = new Float32Array(n);
    bucket = new Uint16Array(n);
    order = new Uint32Array(n);
  };

  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h);
    for (let j = 0; j < rowWave.length; j++) {
      const y = gap / 2 + j * gap;
      rowWave[j] = Math.sin(y * 0.006 + t * 0.2) * 2.2;
    }
    const none = HUES * ALPHAS;
    counts.fill(0);
    for (let i = 0; i < n; i++) {
      const x = xs[i];
      const y = ys[i];
      const wave = Math.sin(x * 0.009 + t * 0.35 + rowWave[row[i]]) + Math.cos(y * 0.013 - t * 0.28 + x * 0.003);
      const k = (wave + 2) / 4;
      const r = amp[i] * k;
      rs[i] = r;
      const b = r < 0.35 ? none : hue[i] * ALPHAS + Math.round(k * (ALPHAS - 1));
      bucket[i] = b;
      counts[b]++;
    }
    // Counting sort dots into their buckets.
    let sum = 0;
    for (let b = 0; b < none; b++) {
      const c = counts[b];
      counts[b] = sum;
      sum += c;
    }
    for (let i = 0; i < n; i++) {
      const b = bucket[i];
      if (b !== none) order[counts[b]++] = i;
    }
    let start = 0;
    for (let b = 0; b < none; b++) {
      const end = counts[b];
      if (end === start) continue;
      ctx.fillStyle = STYLES[b];
      ctx.beginPath();
      for (let p = start; p < end; p++) {
        const i = order[p];
        const r = rs[i];
        ctx.moveTo(xs[i] + r, ys[i]);
        ctx.arc(xs[i], ys[i], r, 0, Math.PI * 2);
      }
      ctx.fill();
      start = end;
    }
  };

  const loop = (now: number) => {
    const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
    last = now;
    elapsed += dt;
    const speed = elapsed < CRUISE ? 1 : Math.max(0, 1 - (elapsed - CRUISE) / (RUN - CRUISE));
    clock += dt * speed;
    draw(clock);
    if (visible && elapsed < RUN && !reduce.matches) raf = requestAnimationFrame(loop);
  };

  const restart = () => {
    cancelAnimationFrame(raf);
    last = 0;
    if (elapsed < RUN && !reduce.matches) raf = requestAnimationFrame(loop);
  };

  size();
  draw(clock);
  restart();

  new ResizeObserver(() => {
    size();
    draw(clock);
  }).observe(canvas);

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) restart();
  }).observe(canvas);

  reduce.addEventListener('change', restart);
}

document.querySelectorAll<HTMLCanvasElement>('canvas[data-field]').forEach(mount);
