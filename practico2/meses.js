// 2. Escriba un programa que solicite al usuario ingresar un número entero del 1 al 12 representando los meses de un año. Su programa deberá ser guardado en un archivo meses.js y consistirá de imprimir por consola la cantidad de días que tiene el mes ingresado bajo el siguiente formato: "La cantidad de dias del mes de [mes] es [cantidadDeDias]"

const readlineSync = require('readline-sync');
let numero = readlineSync.question('Ingrese un numero entero del 1 al 12: ');

mes = { 1: "enero", 2: "febrero", 3: "marzo", 4: "abril", 5: "mayo", 6: "junio", 7: "julio", 8: "agosto", 9: "septiembre", 10: "octubre", 11: "noviembre", 12: "diciembre"}

numero = parseFloat(numero);

switch (numero) {
    case 1:
        console.log("La cantidad de dias del mes de %s es 31", mes[1]);
        break;
    case 2:
        console.log("La cantidad de dias del mes de %s es 28", mes[2]);
        break;
    case 3:
        console.log("La cantidad de dias del mes de %s es 31", mes[3]);
        break;
    case 4:
        console.log("La cantidad de dias del mes de %s es 30", mes[4]);
        break;
    case 5:
        console.log("La cantidad de dias del mes de %s es 31", mes[5]);
        break;
    case 6:
        console.log("La cantidad de dias del mes de %s es 30", mes[6]);
        break;
    case 7:
        console.log("La cantidad de dias del mes de %s es 31", mes[7]);
        break;
    case 8:
        console.log("La cantidad de dias del mes de %s es 31", mes[8]);
        break;
    case 9:
        console.log("La cantidad de dias del mes de %s es 30", mes[9]);
        break;
    case 10:
        console.log("La cantidad de dias del mes de %s es 31", mes[10]);
        break;
    case 11:
        console.log("La cantidad de dias del mes de %s es 30", mes[11]);
        break;
    case 12:
        console.log("La cantidad de dias del mes de %s es 31", mes[12]);
        break;
    default:
        console.log("Por favor, ingrese un número válido");
}  