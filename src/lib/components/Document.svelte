<script lang="ts">
  import List from '$lib/components/List.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  export let storyTitle: string;
</script>

<article class="overview-story">
  <h2>{storyTitle}</h2>
  <slot />
</article>

<style>
  .overview-story {
    padding: 3em;
    background-color: var(--white);
    border-radius: 1em;
  }

  .overview-story::before {
    content: url(/book-holes-small.svg);
    position: absolute;
    margin-left: -4em;
  }
</style>