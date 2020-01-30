const {Selector} = require('testcafe');

exports.ReservaDatosPacientes = {
    campoTelefono: function() {
        return Selector('[id="telephone"]').with({ boundTestRun: testController })
    },
    campoemail: function() {
        return Selector('[id="email"]').with({ boundTestRun: testController })
    },
    botonConfirmarReserva: function() {
        return Selector('[@id="root"]/div/main/div[4]/div[3]/div[3]/div/div[2]/div/div/button').with({ boundTestRun: testController })
        //cambiar xpath por Constains siguiente
    },
}
