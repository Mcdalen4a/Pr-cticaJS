console.log('Comenzó el programa');

const funcPromesa = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const paginas = {
                '/users': [
                    { id: 1, usuario: 'Juan' },
                    { id: 2, usuario: 'Pedro' }
                ],

                '/users/1' : {
                    id : 1,
                    usuario: 'Juan',
                    apellido: 'Perez',
                    edad: 34,
                    ultimaNota: 1234,
                },

                '/users/2' : {
                    id: 2,
                    usuario:'Pedro',
                    apellido: 'Ramirez',
                    edad: 35,
                    ultimaNota: 2345,
                }, 

                '/notas/1234':{
                    id : 1234,
                    titulo: 'Como emigrar a otro pais',
                },

                '/notas/2345' : {
                    id : 2345,
                    titulo: 'Argentina podria tener una inflacion'
                }, 
                '/about': 'Esta pagina es de...'
            };

            funcPromesa('/users').then((res) => {
                console.log(res.datos[0].id)
                const id = res.datos[0].id

                return funcPromesa(`/users/${id}`).then((res) => {
                    console.log(res.datos.ultimaNota)
                    const ultimaNota = res.datos.ultimaNota
                    funcPromesa(`/notas/${ultimaNota}`).then((res) => {
                        console.log(res.datos.titulo)
                    })
                })

            }).catch((res) => {
                console.log(res.status)
            })

            const datos = paginas[url];

            if (datos) {
                return resolve({ status: 200, datos }); // Corregido aquí
            }
            return reject({ status: 400 }); // Cerrado paréntesis aquí
        }, 5000);
    }); // Cerrado paréntesis aquí
}; // Cerrado paréntesis aquí

funcPromesa('/about').then((respuesta) => {
    console.log(respuesta.status);
    console.log('True');
}).catch((respuesta) => { // Corregido aquí
    console.log(respuesta.status);
    console.log('False');
});

console.log('Continua el programa...');

// Eliminé la función funcPromesa repetida

const funcPromesa2 = () => {
    return new Promise((resolve, reject) => { // Renombrada a funcPromesa2
        setTimeout(() => {
            const num = Math.random();
            console.log(num);
            if (num < 0.9) {
                return resolve({ status: 200 });
            }
            return reject({ status: 404 });
        }, 5000);
    });
};

funcPromesa2().then((respuesta) => {
    console.log('true');
}).catch((respuesta) => {
    console.log(respuesta.status);
    console.log('false');
});

console.log('Continua el programa');

console.log('Continua el programa');

console.log('Continua el programa');

console.log('Continua el programa');


