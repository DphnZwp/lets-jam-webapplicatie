<script lang="ts">
  export let listTitle: string;
  export let listText: string;
</script>

<li><span>{listTitle}</span> {listText}</li>

<style>
  span {
    font-size: 1.1875rem;
    line-height: 1.5;
    font-weight: 600;
  }

  li {
    font-size: 1.1875rem;
    line-height: 1.5;
  }
</style>