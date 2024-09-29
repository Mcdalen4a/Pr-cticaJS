
//--------------------------------------

async function mayor (num) {
    if (num >= 18){
        return ('Eres mayor de edad')
    }
    throw 'Eres menor de edad'
}

function mayor2 (num) {
    return new Promise((resolve, reject) => {
        if (num >= 18){
            return ('Eres mayor de edad')
        }
        reject ('Eres menor de edad')
   
    })
}


mayor2(11).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})