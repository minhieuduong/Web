function login () {
   let username = document.getElementById('username').value;
   let password = document.getElementById('password').value;
}
if (_.isEmpty(username)) {
      document.getElementById('username-error').innerHTML = '*';
   } else {
      document.getElementById('username-error').innerHTML = '';
   }
   if (_.isEmpty(password)) {
      document.getElementById('password-error').innerHTML = '*';
   } else {
      document.getElementById('password-error').innerHTML = '';
   }