const checkResponse = (response) => {
    if (response.status !== 200){
        throw new Error (`Error codigo: ${response.status}`)
    }

    return response.json()
}

const unaPromesa = fetch ('https://swapi.dev/api/people')
.then(checkResponse)

.then((response) => {
    if (Response.status !== 200){
        throw new Error (`Error codigo: ${response.status}`)
    }
  return response.json()
})

.then((data) => {
    const filmUrl = (data.results[0].fimls[0])
    return fetch(filmUrl)   
})

.then(checkResponse)

.then((data) => {
    const personajes = data.results
    for(let personaje of personajes){
        console.log(personaje.name)
    }
    return Promise.resolve(data.results[0].films[0])
})

.then((url) => {
    //const filmUrl = (data.results[0].films[0])
    //return fetch(filmUrl)
    console.log(url)
    return fetch(url)
})


.then((response) => {
    if(response.status !== 200){
        throw new Error (`Error codigo: ${response.status}`)
    }
    return response.json()
})

.then(checkResponse)

.then((data) => {
    console.log(data)
}) 

.catch((Error) => {
    console.log('Error', Error)
})
console.log(unaPromesa)