import { isPostModule } from '$lib/types/post';

export const prerender = true;

export async function load() {
	const modules = import.meta.glob('/src/content/blog/*.svx');
	const posts = await Promise.all(
		Object.entries(modules).map(async ([path, loader]) => {
			const postModule = await loader();
			const postValidated = isPostModule(postModule);
			if (!postValidated) throw new Error('Invalid post');
			const slug = path.split('/').pop()?.replace('.svx', '');
			return { slug, ...(postModule.metadata ?? {}) };
		})
	);
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return { posts };
}
