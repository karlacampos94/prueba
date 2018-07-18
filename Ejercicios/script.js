'use strict';
(() => {
    const bAppend = appendLI('becados');
    const rAppend = appendLI('reprobados');
    const aAppend = appendLI('asesorias');
    const alumnosState = alumnosService({ alumnos: [] });

    // const reprobados = alumnos.filter((alumno) => alumno.promedio < 30);
    //                const promedioR = reprobados.reduce((promedio, alumno) => {
    //                    return promedio = promedio + alumno.promedio;
    //                }, 0)
    //                promedioR = promedioR / reprobados.lenght;
    //                console.log(promedioR);
    
    fetch('/alumnos')
    .then((res) => {
        console.log(res);
        return res.json()
    })
    .then((alumnos) => {
        alumnos.forEach(alumno => {
            console.log(alumno);
            if (alumno.promedio < 30) {
                    console.log(alumno.nombre);
                    rAppend(alumno.nombre);
                }
                if (alumno.promedio >= 30 && alumno.promedio < 80) {
                    aAppend(alumno.nombre);
                    console.log(aAppend);
                }
                if (alumno.promedio >= 80 || (alumno.promedio > 30 && alumno.destacado)) {
                    bAppend(alumno.nombre);
                    console.log(bAppend);
                }
            });

        });

    fetch('/cars')
        .then((res) => {
            return res.json()
        })
        .then((cars) => {
            console.log(cars);
            const carsNames = cars.map((car) => {
                return {
                    nombre: car.name,
                    precio: car.dollar_value * 18
                }
                console.log(carsNames);
            });
        });
    function imprimirAlumnos(alumnos) {
        document.getElementById('becados').innerHTML = '';
        alumnos.forEach(alumno => {
            bAppend(alumno.nombre);
        });
    }
    function appendLI(id) {
        const list = document.getElementById(id);
        return (text) => {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(text));
            list.appendChild(listItem);
        }
    }
})();
