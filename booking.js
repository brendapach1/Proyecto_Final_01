//-------------------> Challenge <------------------
// * Usar Bootstrap *
// Preguntar Nombre
// Preguntar Dirección
// Preguntar Teléfono
// Preguntar si quieren pizza con piña o sin
// respuestas: sí o no
// -> mostrar las respuestas en una card de Bootstrap

console.log('Hola desde consola, proyecto final!');

//PASO 1: Declarar los elementos que usaré del html

//INPUTS
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const adultos = document.getElementById('adultos');
const kids = document.getElementById('kids');
const telefono = document.getElementById('telefono');
const mascotas = document.getElementById('mascotas');
const cuidados = document.getElementById('cuidados');
const reservar = document.getElementById('reservar');
const card = document.getElementById('card');


//RESPUESTAS / CARD
const respuestaNombre = document.getElementById('respuestaNombre');
const respuestaCorreo = document.getElementById('respuestaCorreo');
const respuestaAdultos = document.getElementById('respuestaAdultos');
const respuestaKids = document.getElementById('respuestaKids');
const respuestaTelefono = document.getElementById('respuestaTelefono');
const respuestaMascotas = document.getElementById('respuestaMascotas');
const respuestaCuidados = document.getElementById('respuestaCuidados');
const imagenPizza = document.getElementById('imagenPizza');

//PASO 2: Declarar la función que generará la card
const crearReserva = () => {

      //Modificamos el contenido de cada respuesta de la card por el valor que ingresó el usuario
      respuestaNombre.innerHTML = nombre.value;
      respuestaCorreo.innerHTML = correo.value;
      respuestaAdultos.innerHTML = adultos.value;
      respuestaKids.innerHTML = kids.value;
      respuestaTelefono.innerHTML = telefono.value;
      respuestaMascotas.innerHTML = mascotas.value;
      respuestaCuidados.innerHTML = cuidados.value;

      //Condicionamos la respuesta del usuario para saber si quiere piña o no
      if (!mascotas.checked) {
        respuestaMascotas.innerHTML = 'Con mascota';
      } else {
        respuestaMascotas.innerHTML = 'Sin mascota';
      }

      if (!cuidados.checked) {
        respuestaCuidados.innerHTML = 'Sin cuidados especiales';
      } else {
        respuestaCuidados.innerHTML = 'Con cuidados especiales';
      }
    }



//PASO 3: Agregamos el event listener al botón de ordenar para que cuando se le haga click ejecute le función previamente declarada crearComanda
reservar.addEventListener('click',crearReserva);
