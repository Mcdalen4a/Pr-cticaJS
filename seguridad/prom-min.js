console.log("Comenzo el programa");
const funcPromesa=a=>new Promise((t,e)=>{setTimeout(()=>{let 
    o={"/users":[{id:1,usuario:"Juan"},{id:2,usuario:"Pedro"}],
    "/users/1":{id:1,usuario:"Juan",apellido:"Perez",edad:34,ultimaNota:1234},
    "/users/2":{id:2,usuario:"Pedro",apellido:"Ramirez",edad:51,ultimaNota:2334},
    "/notas/1234":{id:1234,titulo:"Como emigrar a otro pais"},
    "/notas/2334":{id:2334,titulo:"Argentina podr\xeda tener una inflacion del 70% en 2022"},"/about":"Esta pagina es de ...."}
    ,s=o[a];return s?t({status:200,datos:s}):e({status:404})},1e3)});funcPromesa("/users").then(a=>{let t=a.datos[0].id;return 
        funcPromesa(`/users/${t}`)}).then(a=>{let t=a.datos.ultimaNota;return 
            funcPromesa(`/notas/${t} `)}).then(a=>{console.log(a.datos.titulo)}).catch(a=>{console.log(a.status)});