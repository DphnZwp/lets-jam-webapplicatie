<script lang="ts">
  export let link: string;
  export let linkTitle: string;
</script>

<a href="{link}">{linkTitle}</a>

<style>
  a {
    color: var(--black);
    font-size: 1.1875rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:hover {
    color: var(--red);
  }
</style>