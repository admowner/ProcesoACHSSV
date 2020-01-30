const {Selector} = require('testcafe');

exports.ReservaFechaHora = {
    DiaCalendario: function() {
        return Selector('[xpath="//*[@id="dates"]/div[1]/div/div/div/table/tbody/tr[5]/td[5]"]').with({ boundTestRun: testController })
    },
    SeleccionHora: function() {
        return Selector('[xpath="//*[@id="profesional"]/div/div[2]/div/div[2]/div"]').with({ boundTestRun: testController })
    },
    
}
