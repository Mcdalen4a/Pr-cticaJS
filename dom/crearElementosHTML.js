const ul = document.querySelector('ul')


//createElement
const nuevoLi = document.createElement('li')

//Asignarle Clase o Id
nuevoLi.className = 'especial';
nuevoLi.id = 'li-especial'

//Asignale Atributos
nuevoLi.setAttribute ('title', 'createElement');

//createTextNode
const propCreateElement = document.createTextNode('createElement');

//Asignar nodo de texto al li
nuevoLi.appendChild(propCreateElement);

//Asignar al ul en nuevo li
ul.appendChild(nuevoLi);

console.log(nuevoLi);