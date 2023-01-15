<article class="notebook">
  <section class="notebook-introduction">
    <h1 class="notebook-introduction__heading">Fight against procrastination!</h1>
    <p>The purpose of this website is to get more discipline to write. You can choose challenges for your documents to get you in the right mindspace and get your work done. Create a document with a challenge when you're interested. Good luck!</p>
    <div class="notebook-introduction__button-group">
      <a class="button--red" href="/">Let's write</a>
      <a class="button--blue" href="/">More information</a>
    </div>
    <div class="p">
      <h2>Too lazy to login?</h2>
      <p>You can write and download a document here. But keep in mind you cannot save your document when you are not logged in.</p>
      <a class="button--red" href="/">Write here</a>
    </div>
  </section>

  <section class="notebook-visual">
    <img src="/writing-visual.svg" alt="cddds">
  </section>
</article>

<style>
  .notebook {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .5em;
  }

  .notebook-introduction {
    padding: 3em;
    background-color: var(--white);
    border-top: 10px solid var(--brown);
    border-right: 7px solid var(--brown);
    border-bottom: 10px solid var(--brown);
    border-left: 10px solid var(--brown);
    border-radius: 1em;
  }

  .notebook-introduction__heading {
    margin-bottom: .4em;
  }

  .notebook-visual {
    padding: 3em;
    background-color: var(--white);
    border-top: 10px solid var(--brown);
    border-right: 10px solid var(--brown);
    border-bottom: 10px solid var(--brown);
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

  .p {
    margin-top: 2em;
    padding: 2em;
    background-color: var(--light-blue);
  }

  img {
    width: 100%;
  }
</style>