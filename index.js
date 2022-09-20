// Write your code here!
main.remove('main');

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = 'Kate is the champion';

document.body.append(newHeader);