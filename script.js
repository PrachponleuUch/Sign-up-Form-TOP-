'use strict'

var check = function() {
  if (pw.value === rePW.value) {
    pw.classList.remove('error');
    rePW.classList.remove('error');
    message.style.color = 'green';
    message.innerHTML = 'Password Matched';
    return true;
  } else {
    pw.classList.add('error');
    rePW.classList.add('error');
    message.style.color = 'red';
    message.innerHTML = '*Passwords do not match';
    return false;
  }
}

let pw = document.getElementById('password');
let rePW = document.getElementById('re-password');
let message = document.getElementById('message');
let form = document.getElementById('form2');
pw.addEventListener('keyup', (e) => {
  e.preventDefault();
  check();
});

rePW.addEventListener('keyup', (e) => {
  e.preventDefault();
  check();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(check()) form.submit();
})
