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
	class="mx-auto min-h-screen max-w-4xl bg-bg px-4 pb-12
            text-primary-900 sm:px-8"
>
	<header class="flex items-start justify-between py-4 pb-18">
		<h1 class="font-mono text-lg">
			<span class="whitespace-nowrap">
				<span class="token keyword">const</span>
				<span class="token identifier">nicholas</span>:
				<span class="token class-name">Developer</span>
				= {'{'}
			</span>
			<span class="block pl-8 sm:inline sm:pl-0">
				<a
					href={resolve('/')}
					class={`rounded text-warning-600 underline underline-offset-2 transition-colors hover:text-warning-800 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none ${$page.url.pathname === '/' ? 'decoration-red-600 decoration-wavy' : ''}`}
					>bio</a
				>,
			</span>
			<span class="block pl-8 sm:inline sm:pl-0">
				<a
					href={resolve('/blog')}
					class={`text-warning-600 underline underline-offset-2 transition-colors hover:text-warning-800 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none ${$page.url.pathname.startsWith('/blog') ? 'decoration-red-600 decoration-wavy' : ''}`}
					>blog</a
				>,
			</span>
			<span class="block pl-8 sm:inline sm:pl-0">
				<a
					href="https://github.com/nicholasnelson"
					class="rounded text-warning-600 underline underline-offset-2 transition-colors hover:text-warning-800 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
					target="_blank"
					rel="noopener noreferrer"
					>github<span aria-hidden="true">↗</span><span class="sr-only"> (external)</span></a
				>
			</span>
			}
		</h1>
		<ThemeToggle />
	</header>

	<main class="prose">
		{@render children?.()}
	</main>
</div>
