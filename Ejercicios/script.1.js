'use strict';
(function (global) {
    const stategenerator = (initialstate) => {
        const state = initialstate;
        return {
            getstate: () => ({ ...state }),
            agregaalumno: (alumno) => {state.alumnos.push(alumno)}
        }
    }
    window.stategenerator = stategenerator;
})(window);