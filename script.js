const passA = document.getElementById('password');
const passB = document.getElementById('confirm_password');
const msg = document.getElementById('error-msg');

function checkPass() {
  if((passA.value.length != 0 && passB.value.length != 0) && passA.value == passB.value) {
    passA.classList.remove('error');
    passB.classList.remove('error');
    msg.textContent = '';
  } else {
    passA.classList.add('error');
    passB.classList.add('error');
    msg.textContent = '* Passwords do not match';
  }
}

passA.addEventListener('change', checkPass);
passB.addEventListener('change', checkPass);