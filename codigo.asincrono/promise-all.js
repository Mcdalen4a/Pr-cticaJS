console.log("PARALLEL")
async function parallel(){
    const p1 = axios.get("https://swapi.dev/api/people/")
    const p2 = axios.get("https://swapi.dev/api/people/")
    const p3 = axios.get("https://swapi.dev/api/people/")
    const prim = axios.get("https://swapi.dev/api/people/")
    const seg = axios.get("https://swapi.dev/api/people/")
    const ter = axios.get("https://swapi.dev/api/people/")
    
    //console.log(pri)
    const results = await Promise.all([p1,p2,p3,pri,seg,ter])
    //console.log(results)
    printPersonajes(results)
}

function printPersonajes (results){
    for (let objeto of results){
        //console.log(objeto)
        const arrayPersonaje = objeto.data.results
        for(let literal of arrayPersonaje){
            console.log(literal.name)
        }
    }
}

parallel()