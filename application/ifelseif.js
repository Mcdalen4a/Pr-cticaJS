let edad = 25; 

if (edad >= 18) {
    console.log("Eres mayor de 18");
} else if (edad >= 13 && edad < 18) {
    console.log("Eres un adolescente");
} else {
    console.log("Eres menor de edad");
}

console.log('seguimos aqui')


//----------------------------------------------------------------------


let edad2 = 20

if(edad2 >= 1 && edad2 <= 12){
    console.log("eres un ninio");
}
    else if(edad2 >= 13 && edad2 <=18){
    console.log("eres un adolescente");
    }
        else if(edad2 >=19 && edad2 <= 60){
        console.log("eres un adulto");
        }
            else if(edad < 60){ 
                console.log("eres un dinosaurio");
            }
                else{
                    console.log("edad no valida");
                }

//--------------------------------------------------------------------

let nota = 10 //ingresa un numero entre el 1 y el 10

if(nota >= 0 && nota <=3){
    console.log("estudia mas");
    }
    else if(nota >= 4 && nota <= 6){
    console.log("estudia para la proxima")
    }
        else if(nota >= 7 && nota <= 9){
        console.log("muy bien");
        }
            else if(nota = 10){
            console.log("felicitaciones");
            }
