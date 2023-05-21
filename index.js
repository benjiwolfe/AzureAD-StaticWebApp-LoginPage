const signUpBtn = document.getElementById('signIn');

signUpBtn.addEventListener('click', () => {
    window.location.replace("/.auth/login/aad?post_login_redirect_uri=https://polite-bush-0dd2f3200.3.azurestaticapps.net/authenticated/");
});
