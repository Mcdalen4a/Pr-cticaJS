





const animales = ['Puma', 'Tigre', 'Pantera', 'Leon', 'Leopardo', 'cobra', 'boa','mamba'];
const serpientes = (animales.splice(5,3,'TIGRE','PANTERA'));
console.log(animales); 
console.log(serpientes);
//donde esta el 1 se pone la posicion que se quiere borrar, si esta el 0 no se va a eliminar nada
//sino, se cambia de lugar