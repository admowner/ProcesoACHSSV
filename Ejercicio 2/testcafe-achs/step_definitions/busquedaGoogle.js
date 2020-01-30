const { Given, When, Then } = require('cucumber');
const { Selector } = require('testcafe');
const paginaDeBusqueda = require('../support/pages/BusquedaGoogle_page.js')
const paginaMainACHS = require('../support/pages/ACHSMain_page.js')
const paginaReserva1 = require('../support/pages/ACHSReserva1_page.js')
const paginaReservaRutSalud = require('../support/pages/ACHSReservas_RutSalud.js')
const paginaReservaEspecialidad = require('../support/pages/ACHSReservas_Especialidad.js')
const paginaReservaFechaHora = require('../support/pages/ACHSReservas_FechaHora.js')
const paginaReservaDatosPaciente = require('../support/pages/ACHSReserva_DatosPaciente.js')
Given('que navego a google', async function () {
    await testController.navigateTo('http://www.google.cl/')
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso1_acceso_Google.png',
        fullPage: true
    })
});
When('ingreso en campo de busqueda la palabra {string}', async function (valorBusqueda) {
    await testController.typeText(paginaDeBusqueda.BusquedaGoogle.campoBusqueda(), valorBusqueda)
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso2_Busqueda_Google.png',
        fullPage: true
    })
});
When('presiono el boton buscar', async function () {
    await testController.click(paginaDeBusqueda.BusquedaGoogle.botonBuscar())
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso3_Busqueda_Google.png',
        fullPage: true
    })
});
Then('hago clic en el resultado que contiene la palabra {string}', async function (criterioDeBusqueda) {
    await testController.click(paginaDeBusqueda.BusquedaGoogle.linkACHS(criterioDeBusqueda))
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso4_click_resultado_Google.png',
        fullPage: true
    })
});
Then('hago clic en el link que dice "RESERVA TU HORA', async function(){
    await testController.click(paginaMainACHS.ACHSMain.AgendaTuHora())    
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso5_RESERVA_TU_HORA.png',
        fullPage: true
    })
});
Then('hago clic en el boton "Agendar hora"', async function(){
    await testController.click(paginaReserva1.Reserva1.BotonAgendarHora())
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso6_Agendar_HORA.png',
        fullPage: true
    })
});
Then('ingreso en el campo de N de documento el Rut {string}',async function (valorIngresado){
    await testController.typeText(paginaReservaRutSalud.ReservaRutSalud.campoRut(), valorBusqueda)
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso7_IngresoRut.png',
        fullPage: true
    })
});
Then('selecciono prevision "Fonasa"',async function (valorIngresado){
    await testController.click(paginaReservaRutSalud.ReservaRutSalud.campoCoverturaSalud())
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso7_SeleccionFonasa.png',
        fullPage: true
    })
});
Then('hago clic en boton "Siguiente""', async function(){
    await testController.click(paginaReservaRutSalud.ReservaRutSalud.botonSiguiente())
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso_clickSiguiente.png',
        fullPage: true
    })
});
Then('selecciono prevision "Medicina General"',async function (valorIngresado){
    await testController.click(paginaReservaEspecialidad.ReservaRutEspecialidad.campoEspecialidad())
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso9_MedicinaGeneral.png',
        fullPage: true
    })
});
Then('selecciono en primer calendario "31"',async function (valorIngresado){
    await testController.click(paginaReservaFechaHora.ReservaFechaHora.DiaCalendario())
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso10_SeleccionCalendario.png',
        fullPage: true
    })
});
Then('selecciono primera hora "08:45 hrs."',async function (valorIngresado){
    await testController.click(paginaReservaFechaHora.ReservaFechaHora.SeleccionHora())
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso11_SeleccionHora.png',
        fullPage: true
    })
});
Then('ingreso Telefono de contacto {string}',async function (valorIngresado){
    await testController.typeText(paginaReservaDatosPaciente.ReservaDatosPacientes.campoTelefono(), valorBusqueda)
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso12_IngresoTelefono.png',
        fullPage: true
    })
});
Then('ingreso Email de contacto {string}',async function (valorIngresado){
    await testController.typeText(paginaReservaDatosPaciente.ReservaDatosPacientes.campoemail(), valorBusqueda)
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso13_IngresoEmail.png',
        fullPage: true
    })
});
Then('hago clic en boton "Siguiente""', async function(){
    await testController.click(paginaReservaDatosPaciente.ReservaDatosPacientes.botonConfirmarReserva())
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso14_SeleccionSiguiente.png',
        fullPage: true
    })
});
Then('Validar mensaje "Tu hora fue agendada exitosamente"',async function(){
    await testController.click(paginaReservaDatosPaciente.ReservaDatosPacientes.botonConfirmarReserva())
    .takeScreenshot({
        pathPattern: '${DATE}/${TIME}/Paso15_ValidacionResultado.png',
        fullPage: true
    })
});
