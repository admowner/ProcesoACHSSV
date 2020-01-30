const {Selector} = require('testcafe');

exports.ACHSConfirmacion = {
    AgendaTuHora: function() {
        return Selector('[id="reserva-d"]').with({ boundTestRun: testController })
    }
}