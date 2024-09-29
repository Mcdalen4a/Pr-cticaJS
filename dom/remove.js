const li = document.querySelector('li');

const liAEliminar = document.querySelector('.eliminar');
console.log(liAEliminar);

console.log(liAEliminar.isConnected);
liAEliminar.remove();
console.log(liAEliminar.isConnected);

// Remover o eliminar hijo
// ul.removeChild(li)

// Reemplazar
const h3 = document.querySelector('h3');
console.log(h3);

const nuevo = document.createElement('h3');
nuevo.textContent = 'H3 Fue reemplazado';
console.log(nuevo);

document.body.replaceChild(nuevo, h3); // Descomentar esta línea para reemplazar el h3 existente

