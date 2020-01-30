const {Selector} = require('testcafe');

exports.Reserva1 = {
    BotonAgendarHora: function() {
        return Selector('xpath=//*[@id="root"]/div/main/div/div[4]/div[1]').with({ boundTestRun: testController })
    }
}
