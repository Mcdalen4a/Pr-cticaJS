const cliente01 = {
    nombre : 'Marcos',
    apellido : 'castelli',
}

const cliente02 = {
    nombre : 'Juan',
    apellido : 'Perez',
    notas : [10,9,9]
}

console.log({...cliente02.notas})

const cliente03 = {
    ...cliente02,
}

const xxx = {
    ...cliente02, 
    ...cliente01,
    vip : true,
    dni : 22333456,
    tel : 2214255636
}

console.log (xxx)

console.log(Math.min(...2,4,6,88,33))