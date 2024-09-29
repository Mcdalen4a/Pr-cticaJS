/* 

&& And
True && True  # Resultado: True
True && False # Resultado: False
False && True # Resultado: False
False && False # Resultado: False

|| Or
True || True  # Resultado: True
True || False # Resultado: True
False || True # Resultado: True
False || False # Resultado: False

! NOT (invertir o negar)

*/

let misterio = !(true || false);
console.log (misterio); 

//--------------------------------------

let pass = 'HolaMundo'

let misterio2 = ( (pass.length >= 8) && (pass.indexOf(' ') ===-1) && (pass.indexOf('@')===-1));

if(misterio2){
    console.log('Password es valido');
}else{
    console.log('Password INCORRECTO');
}