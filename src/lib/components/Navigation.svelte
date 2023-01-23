<script lang="ts">
  import Logo from '$lib/components/Logo.svelte'
</script>

<header>
  <Logo />
  <nav>
    <slot />
  </nav>
</header>

<style>
  header {
    padding: 1em 4em;
    background-color: var(--white);
    display: flex;
    justify-content: space-between;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.5em;
  }
</style>
