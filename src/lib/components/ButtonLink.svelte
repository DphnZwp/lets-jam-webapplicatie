<script lang="ts">
  export let link: string;
  export let linkTitle: string;
  export let linkColor: string = 'red';
</script>

<a class="{linkColor}" href="{link}">{linkTitle}</a>

<style>
  .red {
  padding: 1em;
  color: var(--white);
  font-size: 1.1875rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  background: var(--red);
  border-radius: 10px;
  display: block;
  width: max-content;
}

.red:hover {
  transition: 1s transform;
  transform: translateY(-.25em);
}

.blue {
  padding: 1em;
  color: var(--black);
  font-size: 1.1875rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  background: var(--light-blue);
  border-radius: 10px;
  display: block;
  width: max-content;
}

.blue:hover {
  transition: 1s transform;
  transform: translateY(-.25em);
}
</style>

