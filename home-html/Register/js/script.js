function emailIsValid(email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function login() {
   let username = document.getElementById('username').value;
   let password = document.getElementById('password').value;
   let email = document.getElementById('email').value;
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
   if(_.isEmpty(email)) {
      email = '';
      document.getElementById('email-error').innerHTML = '*';
   } else if (!emailIsValid(email)) {
      email = '';
      document.getElementById('email-error').innerHTML = '*';
   } else {
      document.getElementById('email-error').innerHTML = '';
   }
}
function create(){
   if (confirm('Bạn có chắc muốn tạo tài khoản này?')) {
   login.splice(id, 1);
   localStorage.setItem('login',JSON.stringify(login));
   resetForm();
   }
}

function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
}

