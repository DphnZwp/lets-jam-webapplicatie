<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte'
  import Link from '$lib/components/Link.svelte';
  import ButtonLink from '$lib/components/ButtonLink.svelte';
</script>

<Navigation>
  <Link link="/" linkTitle="Home" />
  <Link link="/" linkTitle="About us" />
  <ButtonLink link="/login" linkTitle="Login" />
</Navigation>

<main>
  <div class="background">
    <img class="background-book-holes" src="/book-holes.svg" alt="">
  </div>
  
  <article class="notebook">
    <section class="notebook-introduction">
      <h1 class="notebook-introduction__heading">Fight against procrastination!</h1>
      <p>The purpose of this website is to get more discipline to write. You can choose challenges for your documents to get you in the right mindspace and get your work done. Create a document with a challenge when you're interested. Good luck!</p>
      <div class="notebook-introduction__button-group">
        <ButtonLink link="/login" linkTitle="Let's write" />
        <ButtonLink linkColor="blue" link="/" linkTitle="More information" />
      </div>
      <div class="notebook-lazy">
        <h2>Too lazy to login?</h2>
        <p class="notebook-lazy__paragraph">You can write and download a document here. But keep in mind you cannot save your document when you are not logged in.</p>
        <ButtonLink link="/lazy" linkTitle="Write here" />
      </div>
    </section>
  
    <section class="notebook-visual">
      <img class="notebook-visual__image" src="/writing-visual.svg" alt="cddds">
    </section>
  </article>
</main>

<style>
  .notebook {
    display: grid;
    grid-template-columns: 1fr;
    gap: .5em;
  }

  .notebook-introduction {
    padding: 3em;
    background-color: var(--white);
    border-top: 12px solid var(--brown);
    border-right: 7px solid var(--brown);
    border-bottom: 12px solid var(--brown);
    border-left: 12px solid var(--brown);
    border-radius: 1em;
  }

  .notebook-introduction__heading {
    margin-bottom: .25em;
  }

  .notebook-visual {
    padding: 3em;
    background-color: var(--white);
    border-top: 12px solid var(--brown);
    border-right: 12px solid var(--brown);
    border-bottom: 12px solid var(--brown);
    border-left: 7px solid var(--brown);
    border-radius: 1em;
    display: flex;
    align-items: center;
  }

  .notebook-introduction__button-group {
    margin-top: 1.5em;
    display: flex;
    gap: 1em;
  }

  .notebook-lazy {
    margin-top: 2em;
    padding: 2em;
    background-color: var(--light-blue);
    border-radius: 1em;
  }

  .notebook-lazy__paragraph {
    margin-bottom: .75em;
  }

  .background-book-holes {
    top: 30%;
    position: absolute;
    display: none;
  }

  .notebook-visual__image {
    width: 100%;
  }

  .background {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 60em) {
    .notebook-introduction {
    padding: 10em;
    background-color: var(--white);
    border-top: 12px solid var(--brown);
    border-right: 7px solid var(--brown);
    border-bottom: 12px solid var(--brown);
    border-left: 12px solid var(--brown);
    border-radius: 1em;
  }

  .notebook-visual {
    padding: 10em;
    background-color: var(--white);
    border-top: 12px solid var(--brown);
    border-right: 12px solid var(--brown);
    border-bottom: 12px solid var(--brown);
    border-left: 7px solid var(--brown);
    border-radius: 1em;
    display: flex;
    align-items: center;
  }
  }

  @media (min-width: 80em) {
    .notebook {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .5em;
  }

  .notebook-introduction {
    padding: 3em;
    background-color: var(--white);
    border-top: 12px solid var(--brown);
    border-right: 7px solid var(--brown);
    border-bottom: 12px solid var(--brown);
    border-left: 12px solid var(--brown);
    border-radius: 1em;
  }

  .notebook-visual {
    padding: 3em;
    background-color: var(--white);
    border-top: 12px solid var(--brown);
    border-right: 12px solid var(--brown);
    border-bottom: 12px solid var(--brown);
    border-left: 7px solid var(--brown);
    border-radius: 1em;
    display: flex;
    align-items: center;
  }
  }

  @media (min-width: 95em) {
  .background-book-holes {
    display: block;
  }
  }

  @media (min-width: 100em) {
    .notebook-introduction {
      padding: 5em;
    }

    .notebook-visual {
      padding: 5em;
    }
  }
</style>