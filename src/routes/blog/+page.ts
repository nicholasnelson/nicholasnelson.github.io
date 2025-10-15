export const prerender = true;

export async function load() {
  const modules = import.meta.glob('/src/content/blog/*.svx');
  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      const mod: any = await loader();
      const slug = path.split('/').pop()?.replace('.svx', '');
      return { slug, ...(mod.metadata ?? {}) } as any;
    })
  );
  posts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return { posts };
}


