//creamos la promesa
const promise = new Promise((res)=>{
    let cont=0;
    setTimeout(()=>res('acabo timeout'),5000);
    });
//creamos la promesa

//consumes la promesa
promise.then((res)=>console.log(res));
console.log('hola');