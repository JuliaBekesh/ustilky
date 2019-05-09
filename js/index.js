const text = document.querySelector('textarea');

document.querySelector('input[type=submit]')
  .addEventListener('click', saveText);

document.querySelector('.load')
  .addEventListener('click', loadText);

function saveText(e) {
  e.preventDefault();
  localStorage['text'] = text.value;
}

function loadText() {
  e.preventDefault();
  text.value = localStorage['text'] || '';
}

const clockContainer = document.querySelector('.clock');
setInterval(() => clockContainer.innerText = (new Date()).toLocaleTimeString(), 1000);


var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/formthotics.jpeg') {
    myImage.setAttribute('src', 'images/ustilky.jpg');
  }
  else {
    myImage.setAttribute('src', 'images/formthotics.jpeg');
  }
}

document.querySelector('.login-form input[type=submit]').addEventListener('click',
  submitForm);

function submitForm(e) {
  e.preventDefault();
  fetch('form.php', {
      method: 'POST',
      body: new FormData(document.querySelector('.login-form'))
    })
    .then(response => response.text())
    .then(html => document.querySelector('.server-response')
      .innerHTML = html);
}
