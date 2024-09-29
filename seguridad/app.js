console.log('use strict')
x = 38
console.log(x)


function misF () {
    let y = 33
    console.log(y)
}

misF()

a = 45
console.log(a)

function objeto (){
    console.log(this)
}

objeto()


(function (){
    console.log('Hola')
    const nombres = ['Marcos', 'Juan']
    console.log(nombres)
})();

(() => {
    console.log('Hola')
})()