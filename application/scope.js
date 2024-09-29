//scope: el lugar donde defina una variable determina
//si podre o no accederlo

let saludo = 'Hola compañeros'


function saludar (){
    const saludo = 'Hola amigos';
    console.log(saludo); 
}

saludar();
console.log(saludo)

//saludo y saludo son diferentes variables

