type Mode = 'hero' | 'band';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

// Motion stops within 5s (WCAG 2.2.2).
const CRUISE = 2.5;
const RUN = 4.5;

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

  const size = () => {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = r.width;
    h = r.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h);
    const gap = w < 640 ? 12 : 15;
    const maxR = gap * 0.46;
    for (let y = gap / 2; y < h; y += gap) {
      for (let x = gap / 2; x < w; x += gap) {
        const u = x / w;
        const v = y / h;
        const wave =
          Math.sin(x * 0.009 + t * 0.35 + Math.sin(y * 0.006 + t * 0.2) * 2.2) +
          Math.cos(y * 0.013 - t * 0.28 + x * 0.003);
        let k = (wave + 2) / 4;
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
        const r = maxR * k * fade;
        if (r < 0.35) continue;
        const m = mode === 'hero' ? u : v;
        const cr = Math.round(lerp(45, 25, m));
        const cg = Math.round(lerp(92, 198, m));
        const cb = Math.round(lerp(255, 217, m));
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${0.25 + 0.75 * k})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
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
