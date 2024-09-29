function multiplicaPor(num) {
    return function(otroNumero) {
      return otroNumero * num;
    };
  }
  
  //const dameElDoble = multiplicaPor(2);
  const dameElDoble = function(otroNumero) {
    return otroNumero * 2;
  };
  
  console.log(dameElDoble(dameElDoble(3)));
  
  function regresaFuncion() {
    return function() {
      console.log('Mas rebuscado no puede ser');
    };
  }
  
  //const mifunction = function
  //const mifunction = regresaFuncion();
  const mifunction = regresaFuncion();
  
  mifunction();
  
//---------------------------------------------------------------------------
  function valorEntreDosNumeros (x,y){
    return function (numero){
        return (numero >= x && numero <= y);
    }
  }

  let valor = valorEntreDosNumeros(0,100);
  console.log(valor(22));


  let valor2 = valorEntreDosNumeros(1,18);
  console.log(valor2(1))