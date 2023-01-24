<script>
  // @ts-nocheck
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

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="email">Email</label>
    <input id="email" bind:this={email} type="email" required>
  </div>
  <div>
    <label for="password">Password</label>
    <input id="password" bind:this={password} type="password" required>
  </div>
  <button type="submit">
		Submit
  </button>
  <div>{errorMessage}</div>
</form>