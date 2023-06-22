// 4. Escriba un programa que solicite al usuario ingresar un número del 1 al 7 representando un día de la semana. Guardar el programa en un archivo diasDeLaSemana.js. La semana comienza el lunes y termina el domingo. Para cualquier otro número, muestra por consola el mensaje: "Número inválido".

const readlineSync = require('readline-sync');
let numero = readlineSync.question('Ingrese un numero entero del 1 al 7: ');

numero = parseFloat(numero);

switch (numero) {
    case 1:
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es martes");
        break;
    case 3:
        console.log("Hoy es miércoles");
        break;
    case 4:
        console.log("Hoy es jueves");
        break;
    case 5:
        console.log("Hoy es viernes");
        break;
    case 6:
        console.log("Hoy es sábado");
        break;
    case 7:
        console.log("Hoy es domingo");
        break;        
    default:
        console.log("Número inválido");
}  