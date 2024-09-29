// 1)insertAdjacentElement() para insertar un objeto
//2)insertAdjacentHTML() para insertar codigo html
//3)insertAdjacentText() para insertar texto plano o un nodo con texto

//En todos los metodos debemos aplicar como primer argumento 
//un string que indica la posicion donde vamos a insertar
//el contenido


// 1)beforebegin - se inserta antes de la etiqueta HTML de apertura
// 2)afterbegin - se inserta dentro de la etiqueta como su primer hijo
// 3)beforeend - si inserta dentro de la etiqueta como ultimo hijo, idem appendChild
// 4)afterend - se inserta despues de la etiqueta HTML de cierre

const existente = document.querySelector('div')
const aInsertar = document.createElement('div')

/*<div>
    <h2>Hola mundo</h2>
</div>*/

existente.insertAdjacentElement('beforebegin', aInsertar);
existente.insertAdjacentElement('afterebegin', aInsertar);
existente.insertAdjacentElement('beforeend', aInsertar);
existente.insertAdjacentElement('afterend', aInsertar);