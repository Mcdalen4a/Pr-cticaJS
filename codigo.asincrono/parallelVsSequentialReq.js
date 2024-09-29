console.log("Parallel vs. sequential request")

async function sequential(){
    const pri = await axios.get("https://swapi.dev/api/people/")
    const seg = await axios.get("https://swapi.dev/api/people/")
    const ter = await axios.get("https://swapi.dev/api/people/")

console.log("SEEQUENTIAL")
console.log(pri)
console.log(seg)
console.log(ter)
}

sequential()

console.log("PARALLEL")
async function parallel(){
    const pri = await axios.get("https://swapi.dev/api/people/")
    const seg = await axios.get("https://swapi.dev/api/people/")
    const ter = await axios.get("https://swapi.dev/api/people/")

    const personajes01 = await pri
    const personajes02 = await seg
    const personajes03 = await ter

console.log(personajes01)
console.log(personajes02)
console.log(personajes03)

}

parallel()