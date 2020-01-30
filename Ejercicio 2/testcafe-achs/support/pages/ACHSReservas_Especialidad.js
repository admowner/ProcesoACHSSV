const {Selector} = require('testcafe');

exports.ReservaEspecialidad= {
    campoEspecialidad: function() {
        return Selector('[id="prestacion_busqueda"]').with({ boundTestRun: testController })
    },
    botonSiguiente: function() {
        return Selector('[id="login"]/div/form/div[4]/button').with({ boundTestRun: testController })
        //cambiar xpath por Constains siguiente
    },
}
