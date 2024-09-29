function numeroSecreto(){
    console.log(Math.floor(Math.random()*10) );
}

function repeti (numeroRepeticiones, x){
    for (let i = 0; i < numeroRepeticiones; i++){
        numeroSecreto();
    }
    return x;
}


repeti(2);


function contieneNumero (array) {
    for(let valor of array){
        console.log(valor)
        if (valor === 5 || valor === 10){ 
            return true;
        }
    }
    return false;
}

console.log(contieneNumero([1,2,3,4,5,8,6,10]));