'use strict';

const nombre = 'Emanuel';
const apellido = 'Leon';
let ciclo = 5;
const active = true;

const direccion = {
    ciudad : 'Cuenca',
    provincia : 'Azuay'
}

console.table({nombre , apellido , ciclo , active , direccion});

// const calcularPromedio = (notas) => // promedio; notas.reduce => sum()

const esMayorEdad = (edad) => edad >= 18;

const getSaludo = (nombre , hora) => 
     hora < 12 ? `Buenos dias, ${nombre}` : hora <18 ? `Buenas tardes ${nombre}` : `Buenas noches , ${nombre}`;

