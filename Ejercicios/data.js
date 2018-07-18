'use strict';


(function (global) {
    const alumnos = [
        {
            nombre: "Odonnell",
            promedio: 1,
            destacado: true
        },
        {
            nombre: "Decker",
            promedio: 65,
            destacado: false
        },
        {
            nombre: "Frances",
            promedio: 11,
            destacado: false
        },
        {
            nombre: "Natalie",
            promedio: 10,
            destacado: false
        },
        {
            nombre: "Cleveland",
            promedio: 47,
            destacado: true
        },
        {
            nombre: "Acevedo",
            promedio: 11,
            destacado: false
        },
        {
            nombre: "Klein",
            promedio: 68,
            destacado: true
        },
        {
            nombre: "Keisha",
            promedio: 80,
            destacado: true
        },
        {
            nombre: "Stella",
            promedio: 84,
            destacado: false
        },
        {
            nombre: "Obrien",
            promedio: 67,
            destacado: true
        }
    ]
    global.acn = { alumnos };
})(window)

    // (function () {
    //     const luis = {
    //         name: 'luis',
    //         lastname: 'perez'
    //     }
    //     console.log(luis);
    //     const mario = {... luis, address{...luis.address}};
    //     mario.name = 'mario';
    //     mario.address.street='2nd avenue';
    //     console.log(mario);
    //     console.log(luis);

    //     const array1 = [1, 2, 3];
    //     const array2 = [...array1];
    //     array1.push(4);
    //     console.log(array1);
    //     console.log(array2);
    // });