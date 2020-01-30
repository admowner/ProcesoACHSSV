Feature: Busqueda en Google

    Como un usuario
    Quiero hacer una busqueda en google (ACHS)
    Para que google me redirija a la pagina de resultados
    y pueda accesar al link del hospitaldeltrabajador
    para hacer una reserva de hora

    Scenario: Realizar una busqueda en google
        Given que navego a google
        When ingreso en campo de busqueda la palabra "ACHS"
        And presiono el boton buscar 
        And hago clic en el resultado que contiene la palabra "Hospital del Trabajador | Achs"
        Then hago clic en el producto que dice "RESERVA TU HORA"
        And presiono boton Agendar hora
	    And ingreso en el campo de N de documento el Rut "17601351-6"
        And selecciono prevision "Fonasa"
	    And hago clic en boton "Siguiente"
        Then selecciono especialidad "Medicina General"
        And hago clic en boton "Siguiente"
        Then selecciono en primer calendario "31"  
        And selecciono primera hora "08:45 hrs."
        Then ingreso Telefono de contacto "+56956033622"
        And ingreso Email de contacto "sebav1990@gmail.com"
        And hago clic en boton "Confirmar Reserva"
        Then validar resultado
    
        