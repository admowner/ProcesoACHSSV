# ProcesoACHSSV
Proceso ACHS Sebastian Vergara

Desafío ACHS Transformación Digital - Prueba técnica de automatización Parte 1 • Definir todos los casos de prueba de borde de las siguientes funcionalidades/situaciones (esta sección no tiene relación con la parte 2), y entregarlos en un archivo .txt con enfoque BDD utilizando el lenguaje Gherkin.

• Considerando una página web de algún centro médico, que casos definirías para un proceso de agendamiento de hora médica, buscando una especialidad hasta concretar la cita. Para este caso, favor incluir la data de prueba que utilizará. Priorizar pruebas de casos críticos.

Parte 2 La página web a utilizar será Google y hospital del trabajador: (www.google.cl https://www.hospitaldeltrabajador.cl/). El navegador a utilizar es de libre elección.

Se debe utilizar Cucumber, Protractor y Typescript/JavaScript.
TestCafé, RobotFramework (Python) para el desarrollo de la prueba es un Plus.
El proyecto debe ser entregado en Github.
Incluir un video con la ejecución es opcional. De no poseer experiencia en la tecnología sugerida, APLICAR OTRO FRAMEWORK pero justificar el por qué.
Se debe automatizar el agendamiento de hora online en nuestro hospital del trabajador.

En google buscar la palabra "ACHS" y del listado que aparece, presionar en el texto que dice "Hospital del Trabajador | Achs"

En https://www.hospitaldeltrabajador.cl/), se debe hacer presionar el botón “reserva tu hora”, luego clic en agendar hora e ingresar un N° documento válido, seleccionar previsión “Fonasa” y darle clic a siguiente.

En especialidad, escribir “Medicina General”, y darle siguiente. Finalmente validar que el texto en pantalla diga “Medicina General” justo debajo de los resultados encontrados. Finalmente tomar un Screenshot para validar el término del flujo.
