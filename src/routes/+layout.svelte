<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="mx-auto min-h-screen max-w-4xl bg-bg px-6 pb-12
            text-primary-900 sm:px-8"
>
	<header class="flex items-center justify-between py-4 pb-18">
		<h1 class="font-mono sm:text-lg">
			<span class="token keyword">const</span>
			<span class="token identifier">nicholas</span>:
			<span class="token class-name">Developer</span>
			= {'{'}
			<a
				href={resolve('/')}
				class={`rounded text-warning-600 underline underline-offset-2 transition-colors hover:text-warning-800 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none ${$page.url.pathname === '/' ? 'decoration-red-600 decoration-wavy' : ''}`}
				>bio</a
			>,
			<a
				href={resolve('/blog')}
				class={`text-warning-600 underline underline-offset-2 transition-colors hover:text-warning-800 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none ${$page.url.pathname.startsWith('/blog') ? 'decoration-red-600 decoration-wavy' : ''}`}
				>blog</a
			>,
			<a
				href="https://github.com/nicholasnelson"
				class="rounded text-warning-600 underline underline-offset-2 transition-colors hover:text-warning-800 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
				target="_blank"
				rel="noopener noreferrer"
				>github<span aria-hidden="true">↗</span><span class="sr-only"> (external)</span></a
			>
			}
		</h1>
		<ThemeToggle />
	</header>

	<main class="prose">
		{@render children?.()}
	</main>
</div>
