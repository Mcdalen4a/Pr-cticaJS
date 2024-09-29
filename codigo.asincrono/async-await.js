 async function getPersonajes () {
    return axios.get('https://swapi.dev/api/people/')
}

getPersonajes().then((res) => {
    console.log(res)
    for (let personaje of res.data.results) {
        console.log(personaje.name)
    }
}).catch((error) => {
    console.log(error)
}) 

async function getPersonajes2 () {
    const res = await axios.get('https://swapi.dev/api/people/')
    //console.log(res)
    for (let personaje of res.data.results) {
        console.log(personaje.name)
    }
}

getPersonajes2().catch((e) => {
    console.log('Hay un error', e)
})