<script lang="ts">
  export let data;
  const { posts } = data;

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    const day = d.toLocaleString('en-AU', { day: '2-digit' });
    const month = d.toLocaleString('en-AU', { month: 'short' });
    const year = d.getFullYear();
    return `${day} ${month}, ${year}`;
  };
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="space-y-4 sm:space-y-5">
  {#each posts as post}
    <div class="flex items-baseline justify-between gap-4">
      <a href={`/blog/${post.slug}`} class="text-warning-600 underline underline-offset-2 visited:text-warning-400 visited:decoration-dotted hover:text-warning-800 text-lg sm:text-xl">
        {post.title}
      </a>
      {#if post.date}
        <time datetime={post.date} class="ml-4 text-sm sm:text-base text-primary-700 whitespace-nowrap">{formatDate(post.date)}</time>
      {/if}
    </div>
  {/each}
  {#if posts.length === 0}
    <p>No posts yet.</p>
  {/if}
  
</section>


