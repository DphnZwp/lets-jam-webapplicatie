<script>
  import Navigation from '$lib/components/Navigation.svelte'
  import Link from '$lib/components/Link.svelte';
  import ButtonLink from '$lib/components/ButtonLink.svelte';
  import Button from '$lib/components/Button.svelte';

  let email;
  let password;
  let errorMessage = '';
  
  function handleSubmit(event) {
    event.preventDefault();
    let messages = [];
    if (email.value === '' || email.value == null) {
      messages.push('Email is required');
    }
  
    if (password.value === '' || password.value == null) {
      messages.push('Password is required');
    }
  
    if (messages.length > 0) {
      errorMessage = messages.join(', ');
    } else {
      window.location.href = "/documents";
    }
  }
</script>

<Navigation>
  <Link link="/" linkTitle="Home" />
  <Link link="/" linkTitle="About us" />
  <ButtonLink link="/login" linkTitle="Login" />
</Navigation>

<main>
  <section class="login-introduction">
    <h1>Login</h1>
  </section>

  <section class="login">
    <form on:submit|preventDefault={handleSubmit}>
      <h2>Welcome back!</h2>
      <div>
        <label for="email">Email</label>
        <input id="email" bind:this={email} type="email" required>
      </div>
      <div>
      <label for="password">Password</label>
      <input id="password" bind:this={password} type="password" required>
      </div>
      <Button buttonType="submit" buttonTitle="Login" />
      <div>{errorMessage}</div>
    </form>
  
    <section class="login-visual">
      <h2>Don't have an account yet?</h2>
      <p class="login-visual__paragraph">Make an account! <Link link="/login" linkTitle="Sign up" /></p>
      <div class="login-visual img--center">
        <img src="/robot-form.png" alt="Robot filling in form">
      </div>
    </section>
  </section>
</main>

<style>
  .login-introduction {
    padding-bottom: 4em;
    text-align: center;
  }

  .login {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3em;
  }

  form {
    padding: 2em;
    background-color: var(--white);
    border-radius: 1em;
  }

  form>h2 {
    margin-bottom: .5em;
  }

  div {
    margin-bottom: 1.5em;
    display: flex;
    flex-direction: column;
  }

  input {
    margin-top: .5em;
    font-size: 1.1875rem;
    padding: .5em;
    background-color: var(--light-blue);
    border: none;
  }

  .login-visual {
    padding: 2em;
    background-color: var(--white);
    border-radius: 1em;
    display: grid;
  }

  .login-visual__paragraph {
    margin-bottom: 1em;
  }

  .img--center {
    display: grid;
    justify-content: center;
  }

  @media (min-width: 80em) {
    .login {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3em;
  }
  }
</style>
