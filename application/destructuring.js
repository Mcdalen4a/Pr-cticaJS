// const [,{titulo : pelicula2}]= peliculas;
const peliculas = [
    {
      titulo: 'Inception',
      anio: 2010,
      puntos: 9.3,
      genero: 'Ciencia Ficción'
    },
    {
      titulo: 'The Shawshank Redemption',
      anio: 1994,
      puntos: 9.3,
      genero: 'Drama'
    },
    {
      titulo: 'The Dark Knight',
      anio: 2008,
      puntos: 9.0,
      genero: 'Acción'
    },
    {
      titulo: 'Pulp Fiction',
      anio: 1994,
      puntos: 8.9,
      genero: 'Crimen'
    }
  ];
  
  const [, {titulo: pelicula2, anio}, , {titulo, anio: year}] = peliculas;
  
  // Puedes acceder a cada película individualmente, por ejemplo:
  console.log(pelicula2 + ' ' + anio);
  console.log(titulo + ' ' + year);
  console.log(titulo + ' - ' + year);
  
  const [,,,,,objetoTres] = peliculas;
  console.log(objetoTres);
  
  console.log(objetoTres.titulo + ' - ' + objetoTres.puntos);
  
  
  
  