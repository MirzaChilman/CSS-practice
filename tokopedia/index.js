function solution() {
  const parentNode = document.getElementsByClassName('comment-list');
  const dataCount = parentNode[0].getAttribute('data-count');
  const loadingNode = document.createElement('p');
  const loadingText = document.createTextNode('Loading...');
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => {
      res.map(datum => {
        console.log(datum);
        return document.createElement('p');
        /* const itemList = document.createElement('div');
        itemList.setAttribute('class', 'comment-item');

        const userNode = document.createElement('div');
        const userText = document.createTextNode(datum.userId);
        userNode.setAttribute('class', 'comment-item__username');
        userNode.appendChild(userText);

        const msgNode = document.createElement('div');
        const msgText = document.createElement(datum.title);
        msgNode.setAttribute('class', 'comment-item__message');
        msgNode.appendChild(msgText);

        itemList.appendChild(userNode);
        itemList.appendChild(msgNode);
        parentNode[0].appendChild(itemList); */
      });
    });
}

solution();
/* 
              res.map(datum => {
                
                console.log(datum); */
