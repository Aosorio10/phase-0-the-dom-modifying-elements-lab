
document.querySelector('main#main').remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
let name = 'Alejandro';
newHeader.innerHTML = `${name} is the champion`;

document.body.appendChild(newHeader);