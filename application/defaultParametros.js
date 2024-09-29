function multi (x = 2 ,y = 5) {
    console.log(y)
    return x * y;
}

console.log(multi(10, 2))


function saludar (nombre='null', apellido='null', notas='999-999-9999'){
    console.log(`${nombre} ${apellido} - ${notas}`)
}

saludar ('Mark', 'Markinson', [15, 472, 8336]);