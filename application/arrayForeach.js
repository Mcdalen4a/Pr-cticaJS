const animales = ['Puma', 'Tigre', 'Pantera', 'Leon', 'Leopardo', 'Cobra', 'Boa', 'mamba'];

animales.forEach(valor => console.log (valor));

function retornaValores(valor, indice){
    console.log(`${indice} = ${valor}`);
}

animales.forEach(retornaValores);