const div = document.querySelector('div')

const mover = (el, cant, tiempo) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            const anchoPantalla = document.body.clientWidth;
            const medidaObjeto = el.getBoundingClientRect().right
            const izquierda = el.getBoundingClientRect().left;

            console.log(anchoPantalla, medidaObjeto, izquierda)

            if (medidaObjeto + cant > anchoPantalla) {
                reject()
            }
            else {
                el.style.transform = `translateX(${izquierda + cant}px)`
                resolve()
            }
        }, tiempo)
    })
}

async function animar (el,cant){
    try {
        await mover (el,cant, 1000)
        await mover (el,cant, 1000)
        await mover (el,cant, 1000)
        await mover (el,cant, 1000)
        await mover (el,cant, 1000)
        await mover (el,cant, 1000)
    }catch (error){
        console.log('No puedo moverme mas')
        await(div, -50,1000)
        await(div, -50,1000)
        await(div, -50,1000)
    }
}
animar (div)
/* mover (div, 50, 1000)
    .then(() => {
        return mover (div,50,1000)
    })
    .then(() => {

        return mover (div,20,2000)
    })
    .then(() => {
        console.log('Terminamos')
    })
    .catch(() => {
    console.log('No hay espacio')
})

mover (div, 50, 1000)
    .then(() => mover (div,50,1000))
    .then(() => mover (div,50,2000))
    .then(() => mover (div,150,2000))
    .then(() => console.log('Terminamos'))
    .catch(() => console.log('No hay espacio'))
    */
