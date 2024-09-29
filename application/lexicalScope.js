//esto es comun en react

function afuera (){
    console.log('Se ejecuto afuera')
    let pelicula = 'Aliens';

    function adentro(){
        const pelicula = 'Rambo'
        console.log(pelicula);
    }//termino adentro se destruye

    function masAdentro(){
        const pelicula = 'Top Gun';
        console.log(pelicula)
    }

    masAdentro();
    console.log(pelicula)
    adentro();
}




afuera();