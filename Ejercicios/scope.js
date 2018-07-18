'use strict';
// function scopetest(){
//     if (true){
//         let a =1;
//         console.log(a);
//     } else{
//         let a=2;
//         console.log(a);
//     }
// }
// scopetest();


function scopetest(){
    const saludos = 'hola';
    return function(){
        console.log(saludos);
    }
} 
const saludador = scopetest();
saludador();
setTimeout(saludador, 5000); //tiempo de espera en mseg.