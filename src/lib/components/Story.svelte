<script lang="ts">
  import List from '$lib/components/List.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  export let storyTitle: string;
</script>

<article class="overview-story">
  <h2>{storyTitle}</h2>
  <List>
    <ListItem listTitle="Author:" listText="Daphne Zwuup"/>
    <ListItem listTitle="Deadline:" listText="12-02-2023 13:00"/>
    <ListItem listTitle="Challenge:" listText="At least 1000 words"/>
    <ListItem listTitle="Words:" listText="748/1000"/>
  </List>
  <ButtonLink link="/" linkTitle="Continue writing" />
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