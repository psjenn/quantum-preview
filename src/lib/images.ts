import type { ImageMetadata } from 'astro';

const load = (g: Record<string, { default: ImageMetadata }>) =>
  Object.fromEntries(
    Object.entries(g).map(([path, mod]) => [path.split('/').pop()!.replace(/\.(png|jpg)$/, ''), mod.default]),
  );

const photos = load(import.meta.glob('../assets/photos/*.jpg', { eager: true }));
const people = load(import.meta.glob('../assets/team/*.png', { eager: true }));
const colorLogos = load(import.meta.glob('../assets/logos-color/*.png', { eager: true }));

function pick(set: Record<string, ImageMetadata>, kind: string, name: string) {
  const img = set[name];
  if (!img) throw new Error(`No ${kind} image named "${name}"`);
  return img;
}

export const photo = (name: string) => pick(photos, 'photo', name);
export const team = (name: string) => pick(people, 'team', name);
export const colorLogo = (name: string) => pick(colorLogos, 'color logo', name);
