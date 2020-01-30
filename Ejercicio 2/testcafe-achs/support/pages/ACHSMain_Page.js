const {Selector} = require('testcafe');

exports.ACHSMain = {
    AgendaTuHora: function() {
        return Selector('[id="reserva-d"]').with({ boundTestRun: testController })
    }
}