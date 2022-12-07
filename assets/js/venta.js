const resumen = {
    nombre: '',
    apellido: '',
    email: '',
    cantidad: '',
    categoria: ''
}

const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');

let valorTicket = 200;
let cantidadIngresada = '';
let categoriaIngresada = '';

cantidad.addEventListener('input', function(nuevaCantidad){
    cantidadIngresada = nuevaCantidad.target.value;
});

categoria.addEventListener('input', function(nuevaCategoria){
    categoriaIngresada = nuevaCategoria.target.value;
});

function calcular(cant, cat){
    let porcentaje = ""; 
    var resultado = "";
    if (cat == 1){
        porcentaje = 0.2;
    } else if (cat == 2){
        porcentaje = 0.5;
    } else if (cat == 3){
        porcentaje = 0.85;
    } else {
        porcentaje = 1;
    }

    resultado = valorTicket * cant * porcentaje;
    return resultado;
}

function verResumen(){
    const total = document.querySelector('.total');
    var mensaje = "Total a pagar: $ " + calcular(cantidadIngresada, categoriaIngresada);
    total.textContent = mensaje;  
}

function borrar(){
    const total = document.querySelector('.total');
    var mensaje = "";
    total.textContent = mensaje;  
}