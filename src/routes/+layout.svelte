<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="max-w-4xl mx-auto min-h-screen px-6 pb-12 sm:px-8
            bg-bg text-primary-900">
	<header class="py-4 pb-18 flex items-center justify-between">
		<h1 class="font-mono sm:text-lg">
			<span class="token keyword">const</span>
			<span class="token identifier">nicholas</span>:
			<span class="token class-name">Developer</span>
			 = {"{"} 
			<a href="/" class={`underline underline-offset-2 transition-colors text-warning-600 hover:text-warning-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded ${$page.url.pathname === '/' ? 'decoration-wavy decoration-red-600' : ''}`}>bio</a>,
			<a href="/blog" class={`text-warning-600 underline underline-offset-2 transition-colors hover:text-warning-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${$page.url.pathname.startsWith('/blog') ? 'decoration-wavy decoration-red-600' : ''}`}>blog</a>,
			<a href="https://github.com/nicholasnelson" class="underline underline-offset-2 transition-colors text-warning-600 hover:text-warning-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded" target="_blank" rel="noopener noreferrer">github<span aria-hidden="true">↗</span><span class="sr-only"> (external)</span></a> {"}"}
		</h1>
		<ThemeToggle />
	</header>

	<main class="prose">
		{@render children?.()}
	</main>
</div>
