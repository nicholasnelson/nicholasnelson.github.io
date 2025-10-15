<script lang="ts">
  export let data;
  const { Content, metadata } = data;
</script>

<svelte:head>
  <title>{metadata.title}</title>
</svelte:head>

<article class="prose">
  <Content />
</article>


