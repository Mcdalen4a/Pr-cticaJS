//cuando pasamos dentro de una funcion un argumento es call back(?)

function saludar (){
    console.log ('Hola Amigos')
}

function callback (funcion){
    funcion();
}

callback(function (){
    console.log ('Hola mundo');
});


setTimeout(function(){
    console.log ('Esto demora 5 segundos')
}, 5000); //tarda 5 segundos en ejecutar