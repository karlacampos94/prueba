'use strict';
(function(){
const luis={
    name:'luis',
    lastname:'perez'
}
console.log(luis);
const mario=luis;
mario.name='mario';
console.log(mario);
console.log(luis);
luis.name='luis';
console.log(mario);
console.log(luis);

});