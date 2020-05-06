const Form = document.getElementById('form');
const Error = document.getElementById('error');
const UserName = document.getElementById('Name');
const Thanks = document.getElementById('thanks');
const Password = document.getElementById('password');
const EMail = document.getElementById('email');
const userName = UserName.value;
const userEmail = Password.value;
const userPassword = Password.value;


Name.oninvalid = invalid;

Form.onsubmit = submit;

function invalid(event) {
  Error.removeAttribute('hidden');
}

function submit(event) {
  Form.setAttribute('hidden', '');
  Thanks.removeAttribute('hidden');
}

