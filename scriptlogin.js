document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;

      // Lakukan validasi atau kirim data login ke server sesuai kebutuhan
      console.log('Username:', username);
      console.log('Password:', password);
    });
  });