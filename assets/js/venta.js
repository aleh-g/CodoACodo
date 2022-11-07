const btnResumen = document.querySelector('.formulario');

const nombre =document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
var valorTicket = 200;

function calcularResumen(cantidad, categoria){
    let porcentaje = ""; 
    var resultado = "";
    if (categoria == Estudiante){
        porcentaje = 0.2;
    } else if (categoria == Trainee){
        porcentaje = 0.5;
    } else if (categoria == Junior){
        porcentaje = 0.85;
    } else {
        porcentaje = 1;
    }
    resultado = valorTicket * cantidad * porcentaje; 
}

var mensaje = "Total a pagar: $ " + calcularResumen();

btnResumen.addEventListener('click', function(mensaje){})