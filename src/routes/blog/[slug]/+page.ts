import { error } from '@sveltejs/kit';

export const prerender = true;

const posts = import.meta.glob('/src/content/blog/*.svx');

export async function load({ params }) {
  const slug = params.slug;
  const match = posts[`/src/content/blog/${slug}.svx`];
  if (!match) throw error(404, 'Post not found');
  const mod: any = await match();
  return {
    Content: mod.default,
    metadata: mod.metadata ?? { title: slug }
  };
}