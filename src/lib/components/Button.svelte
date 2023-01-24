<script lang="ts">
  export let buttonTitle: string;
  export let buttonColor: string = 'red';
  export let buttonType: undefined;
</script>

<button type="{buttonType}" class="{buttonColor}">{buttonTitle}</button>

<style>
  .red {
    padding: 1em;
    color: var(--white);
    font-size: 1.1875rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    background: var(--red);
    border: none;
    border-radius: 10px;
    display: block;
    width: max-content;
    cursor: pointer;
  }

.red:hover {
  transition: 1s transform;
  transform: translateY(-.35em);
}
</style>