const primerReq = new XMLHttpRequest()

primerReq.addEventListener('load', function () {
    console.log('Datos recibidos')
    const objeto = JSON.parse(datos.target.response)
    const filmUrl = objeto.results[0].films[1]
    console.log(objeto.results[0].films[1])


    const filmReq = new XMLHttpRequest()
    filmReq.addEventListener('load', function(){
        const film = JSON.parse(this.response)
        const titulo = film.title
        console.log(titulo)

        
    })

    filmReq.addEventListener('error', () => {
        console.log('Error, imposible acceder al film')
    })

    filmReq.open ('GET', filmUrl)

    primerReq.send()
});

primerReq.addEventListener('error', () => {
    console.log('Error,imposible acceder a los datos')
})

primerReq.open ('GET', 'https://swapi.dev/api/people/')

primerReq.send()

console.log('Primer request enviado')