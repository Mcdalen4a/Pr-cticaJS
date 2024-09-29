function repetir(funcion, numero){
 for(let i = 0; i < numero; i++){
    funcion();
    }
}

function aleatoria (func1, func2){
    let secreta = Math.random();
    console.log(secreta)
    if(secreta < 0.5){
        func1();
    }else{
        func2()
    }
}

function hola(){
    console.log ('hola a todos')
}

function chau(){
    console.log('chau hasta la proxima');
}

aleatoria (hola, chau)

