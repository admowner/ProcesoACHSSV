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
});
When('ingreso en campo de busqueda la palabra {string}', async function (valorBusqueda) {
    await testController.typeText(paginaDeBusqueda.BusquedaGoogle.campoBusqueda(), valorBusqueda)
});
When('presiono el boton buscar', async function () {
    await testController.click(paginaDeBusqueda.BusquedaGoogle.botonBuscar())
});
Then('hago clic en el resultado que contiene la palabra {string}', async function (criterioDeBusqueda) {
    await testController.click(paginaDeBusqueda.BusquedaGoogle.linkACHS(criterioDeBusqueda))
});
Then('hago clic en el link que dice "RESERVA TU HORA', async function(){
    await testController.click(paginaMainACHS.ACHSMain.AgendaTuHora())    
});
Then('hago clic en el boton "Agendar hora"', async function(){
    await testController.click(paginaReserva1.Reserva1.BotonAgendarHora())
});
Then('ingreso en el campo de N de documento el Rut {string}',async function (valorIngresado){
    await testController.typeText(paginaReservaRutSalud.ReservaRutSalud.campoRut(), valorBusqueda)
});
Then('selecciono prevision "Fonasa"',async function (valorIngresado){
    await testController.click(paginaReservaRutSalud.ReservaRutSalud.campoCoverturaSalud())
});
Then('hago clic en boton "Siguiente""', async function(){
    await testController.click(paginaReservaRutSalud.ReservaRutSalud.botonSiguiente())
});
Then('selecciono prevision "Medicina General"',async function (valorIngresado){
    await testController.click(paginaReservaEspecialidad.ReservaRutEspecialidad.campoEspecialidad())
});
Then('selecciono en primer calendario "31"',async function (valorIngresado){
    await testController.click(paginaReservaFechaHora.ReservaFechaHora.DiaCalendario())
});
Then('selecciono primera hora "08:45 hrs."',async function (valorIngresado){
    await testController.click(paginaReservaFechaHora.ReservaFechaHora.SeleccionHora())
});
Then('ingreso Telefono de contacto {string}',async function (valorIngresado){
    await testController.typeText(paginaReservaDatosPaciente.ReservaDatosPacientes.campoTelefono(), valorBusqueda)
});
Then('ingreso Email de contacto {string}',async function (valorIngresado){
    await testController.typeText(paginaReservaDatosPaciente.ReservaDatosPacientes.campoemail(), valorBusqueda)
});
Then('hago clic en boton "Siguiente""', async function(){
    await testController.click(paginaReservaDatosPaciente.ReservaDatosPacientes.botonConfirmarReserva())
});
Then('Validar mensaje "Tu hora fue agendada exitosamente"',async function(){
    await testController.click(paginaReservaDatosPaciente.ReservaDatosPacientes.botonConfirmarReserva())
});