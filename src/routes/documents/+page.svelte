<script lang="ts">
  import Document from '$lib/components/Document.svelte';
  import List from '$lib/components/List.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import Navigation from '$lib/components/Navigation.svelte'
  import Link from '$lib/components/Link.svelte';
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import Button from '$lib/components/Button.svelte';
  export let data;
  console.log(data);
  
  let documents = data.documents;
  let itemsPerDocument = 3;
  let currentDocument = 0;
  const nextDocument = () => {
    currentDocument = (currentDocument + 1) % (Math.ceil(documents.length / itemsPerDocument));
  }
  const prevDocument = () => {
    if (currentDocument != 0) {
      currentDocument = (currentDocument - 1) % (Math.ceil(documents.length / itemsPerDocument));
    } else {
      currentDocument = Math.ceil(documents.length / itemsPerDocument) - 1;
    }
  }
</script>

<Navigation>
  <Link link="/" linkTitle="Home" />
  <Link link="/" linkTitle="Documents" />
</Navigation>

<main>
  <section class="introduction-documents">
    <h1>Your documents</h1>
    <p class="introduction-documents__paragraph ">
      You have 75 documents. Let's write a new one
      <svg width="48" height="37" viewBox="0 0 48 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 37C35.598 37 45 28.7173 45 18.5C45 8.28273 35.598 0 24 0C12.402 0 3 8.28273 3 18.5C3 28.7173 12.402 37 24 37Z" fill="black"/>
        <path d="M4 12L3.50001 12.2182C1.64286 13.2364 0 15.3455 0 18.0364C0 20.6545 1.57143 22.7636 3.42858 23.7818L3.85716 24" fill="black"/>
        <path d="M16 21C17.6569 21 19 18.9853 19 16.5C19 14.0147 17.6569 12 16 12C14.3431 12 13 14.0147 13 16.5C13 18.9853 14.3431 21 16 21Z" fill="white"/>
        <path d="M31 21C32.6568 21 34 18.9853 34 16.5C34 14.0147 32.6568 12 31 12C29.3431 12 28 14.0147 28 16.5C28 18.9853 29.3431 21 31 21Z" fill="white"/>
        <path d="M18 27C19.3247 27.4873 21.2727 28.137 24 27.9746C26.6493 27.9746 28.2078 27.6497 30 27" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M44.2477 24.0027C43.6665 25.1033 42.9401 26.2772 42.0683 27.5245C40.688 29.4321 39.235 30.8995 38 32C38.4359 27.9647 38.7265 23.3424 38.7265 18.4266C38.7265 13.5109 38.4359 9.03533 38 5L41.4145 8.59511C42.2862 9.76902 43.0854 11.0163 43.9571 12.1902C44.3204 12.337 47.081 13.5842 47.8075 16.7391C47.9528 17.2527 48.4613 19.7473 46.863 22.0217C45.9913 23.269 44.8289 23.7826 44.2477 24.0027Z" fill="black"/>
      </svg>.
    </p>
    <ButtonLink link="/" linkTitle="Create a document" />
  </section>
  
  <section class="overview">
    {#each documents.slice(currentDocument * itemsPerDocument, (currentDocument + 1) * itemsPerDocument) as document}
      <Document storyTitle="{document.title}">
        <List>
          <ListItem listTitle="Author:" listText="{document.author}"/>
          <ListItem listTitle="Deadline:" listText="{new Date(document.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" })}"/>
          <ListItem listTitle="Challenge:" listText="{document.challenge}"/>
        </List>
        <ButtonLink link="/document/{document.slug}" linkTitle="Continue writing" />
      </Document>
    {/each}
  </section>
  <section class="overview__pagination">
    <button
      class="btn btn--blue btn--left"
      on:click={() => prevDocument()}>Previous</button
    >
    <button
      class="btn btn--blue btn--right"
      on:click={() => nextDocument()}>Next</button
    >
  </section>
</main>

<style>
  .introduction-documents {
    margin-bottom: 3em;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .introduction-documents__paragraph {
    margin-top: .5em;
    margin-bottom: 1.5em;
    display: inline-flex;
    gap: .4em;
  }

  .overview {
    padding: 3em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3em;
    background-color: var(--brown);
    border-radius: 1em;
  }

  .overview__pagination {
    display: flex;
    justify-content: center;
    background-color: var(--dark-brown);
    width: 100%;
  }
</style>