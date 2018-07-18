// console.log('Hola Mundo');
// console.log(document.getElementById('square-test'));

// document.getElementById('square-test').addEventListener('click',function(){
//     document.getElementById('square-test').setAttribute('class','red-background');
//     // document.getElementById('square-test').setAttribute('class','resize');
// });


// const valor1 = 2; //let = valor que puede cambiar
// const valor2 = 3;
// //let sumValores = valor1 + valor2;
// console.log(sumValores(valor1, valor2)); //funcion para hacer display.

// const valor3 = 2; //let = valor que puede cambiar
// const valor4 = 2;
// //sumValores = valor3 + valor4;
// console.log(sumValores(valor3,valor4));

// function sumValores(valor1,valor2) {
//     return valor1 + valor2;
// }


// const texto1 = 'Hola';
// const texto2 = ' Mundo';
// console.log(texto1,texto2);
// console.log(texto1 + texto2);



// const nombre ='Karla';
// const saludo = `Hola ${nombre}`;
// console.log(saludo);


// var verdadero = true;
// var falso = false;
// console.log(verdadero,falso);



// {} es un objeto, conjunto de instrucciones o descripciones.
// const carro = {
//     color: 'rojo', // , es para seguir describiendo una variable.
//     'carro-color': 'rojo',
//     dobleTraccion: false,
//     puerta: 4
// }; 
// console.log(carro, carro.color);
// console.log(carro,carro['carro-color']);



// const carro0= {
//     color:'rojo',
//     dobleTraccion: false,
//     puertas: 4
// }

// const carro1= {
//     color:'blanco',
//     dobleTraccion: false,
//     puertas: 2
// }

// const carro2= {
//     color:'azul',
//     dobleTraccion: true,
//     puertas: 4
// }

// const carro3= {
//     color:'negro',
//     dobleTraccion: false,
//     puertas: 4
// }

// const carro4= {
//     color:'verde',
//     dobleTraccion: true,
//     puertas: 2
// }

// const carro5= {
//     color:'rojo',
//     dobleTraccion: true,
//     puertas: 4
// }

//console.log[carro0,carro1,carro2,carro3,carro4]; //[] es para arreglos.
const carros=[carro0,carro1,carro2,carro3,carro4];
//console.log(carros[2]);
//console.log(carros.length); //length = saber la cantidad de una variable
carros.push(carro5); //push es para agregar una variable al final de la lista.
//console.log(carros.length);

// for(let i=0; i<carros.length; i++){
//     console.log(carros[i]);
// }

// carros.forEach(function(item,index,self) {
//     console.log(item.color);
//     // console.log(index);
//     // console.log(self);
// });

// numeros = [123,6,5,234];
// numeros.forEach(function(item,index){
//     numeros[index] = modificar(item, function(valor){
//         return valor / 2;
//     });
// });
// console.log(numeros);

// function modificar(valor,modificador){
//     return modificador(valor);
// }




//" " para mencionar
//' para mencionar algo dentro de otra mencion.
//`` se puede agregar variable dentro de una variable
// const = variable que no puede cambiar 
//let = variable que puede cambiar 
//var = variable de opcion 
//let nulo = null; nulo es una varible que es valor cero (nulo).
//se puede definir variables y no determinarles un valor para despues lo obtenga.


// primitivos 
// let numero = 0; //int 
// let nombre = 'jaime' // string 
// let valor = true; // boolean 

const squareEjercicio = document.getElementById('square-test');
console.log(squareEjercicio);