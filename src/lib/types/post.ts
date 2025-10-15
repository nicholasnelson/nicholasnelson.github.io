export type PostMeta = { date: string; title: string };
export type PostModule = { metadata: PostMeta; default: unknown };

export function isPostModule(v: unknown): v is PostModule {
	if (typeof v !== 'object' || v === null) return false;

	const m = (v as { metadata?: unknown }).metadata;
	if (typeof m !== 'object' || m === null) return false;

	const d = (v as { default?: unknown }).default;
	if (typeof d !== 'function' || d === null) return false;

	return 'date' in m && 'title' in m;
}
