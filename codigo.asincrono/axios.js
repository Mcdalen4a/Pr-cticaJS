const axiosUrl = (url = 'https://swapi.dev/api/people/') => {
    return axios.get(url)
}

const listarPersonajes =({data}) => {
    for (let personaje of data.results) {
        console.log(personaje.name)
    }

    return axiosUrl (data.next)
}

const prom = axiosUrl()
.then(listarPersonajes)
.then(listarPersonajes)
.then(listarPersonajes)

.catch((error) => {
    console.log('Tenemos un error')
    console.log(error)
})

