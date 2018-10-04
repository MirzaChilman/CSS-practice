const parentNode = document.getElementsByClassName('comment__list')[0];
parentNode.innerHTML = 'Loading...';

function getData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {
      parentNode.innerHTML = '';
      return res.map(datum => {
        createItem(datum.name, datum.email);
      });
    });
}

function createItem(usrData, msgData) {
  const parentNode = document.getElementsByClassName('comment__list')[0];

  const childNode = document.createElement('div');
  childNode.setAttribute('class', 'comment__item');

  const userNode = document.createElement('div');
  const userText = document.createTextNode(usrData);
  userNode.setAttribute('class', 'comment__user');
  userNode.appendChild(userText);

  const msgNode = document.createElement('div');
  const msgText = document.createTextNode(msgData);
  msgNode.setAttribute('class', 'comment__message');
  msgNode.appendChild(msgText);

  childNode.appendChild(userNode);
  childNode.appendChild(msgNode);

  parentNode.appendChild(childNode);
}

getData();
