<section class="notebook">
  <article class="notebook-introduction">
    <h1 class="notebook-introduction__heading">Fight against procrastination!</h1>
    <p>The purpose of this website is to get more discipline to write. You can choose challenges for your documents to get you in the right mindspace and get your work done. Create a document with a challenge when you're interested. Good luck!</p>
    <div class="notebook-introduction__button-group">
      <a class="notebook-introduction__button" href="/">Let's write</a>
      <a class="notebook-introduction__button" href="/">More information</a>
    </div>
  </article>
  <article class="notebook-visual">
    <img src="/writing-visual.svg" alt="cddds">
  </article>
</section>

<style>
  .notebook {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .5em;
  }

  .notebook-introduction {
    padding: 6em;
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
    padding: 6em;
    background-color: var(--white);
    border-top: 10px solid var(--brown);
    border-right: 10px solid var(--brown);
    border-bottom: 10px solid var(--brown);
    border-left: 7px solid var(--brown);
    border-radius: 1em;
  }

  .notebook-introduction__button {
    padding: 1em;
    color: var(--white);
    text-decoration: none;
    text-transform: uppercase;
    background: var(--red);
    border-radius: 10px;
  }

  .notebook-introduction__button:hover {
    transition: 1s transform;
    transform: translateY(-.35em);
  }

  .notebook-introduction__button-group {
    margin-top: 1.5em;
    display: flex;
    gap: 1em;
  }

  img {
    width: 100%;
  }
</style>