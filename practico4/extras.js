// EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el código para su correcta utilización.

const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";

function obtenerJugadaComputadora() {
    let piedraPapelTijeras = [piedra, papel, tijeras];
    let resultado = piedraPapelTijeras[Math.floor(Math.random()*3)];
    return resultado;
}


const readlineSync = require('readline-sync');

function obtenerJugadaUsuario() {
    let eleccion = readlineSync.question('Ingrese su eleccion (piedra, papel o tijeras): ');
    while (eleccion !== piedra && eleccion !== papel && eleccion !== tijeras) {
    eleccion = readlineSync.question('Ingrese su eleccion (piedra, papel o tijeras): ');
    }
    return eleccion;
}


function determinarGanador(jugadaUsuario, jugadaComputadora) {
    if ((jugadaUsuario === piedra && jugadaComputadora === tijeras) || 
    (jugadaUsuario === papel && jugadaComputadora === piedra) || 
    (jugadaUsuario === tijeras && jugadaComputadora === papel)) {
        let ganador = "Gana el usuario";
        return ganador;
    } else if ((jugadaUsuario === tijeras && jugadaComputadora === piedra) || 
    (jugadaUsuario === piedra && jugadaComputadora === papel) || 
    (jugadaUsuario === papel && jugadaComputadora === tijeras)) {
        let ganador = "Gana la computadora";
        return ganador;
    } else {
        let ganador = "Empate";
        return ganador;
    }
}


// EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el juego.

function obtenerCantidadJugadas() {
    let jugadas = parseFloat(readlineSync.question('Ingrese cantidad de jugadas: '));
    while (!Number.isInteger(jugadas) || jugadas <= 0) {
        jugadas = parseFloat(readlineSync.question('Ingrese cantidad de jugadas: '));
    }
    return jugadas;
}

let cantidadJugadas = obtenerCantidadJugadas();
let victoriasComputadora = 0;
let victoriasUsuario = 0;

for (let i = 1; i <= cantidadJugadas; i++) {
    console.log("Jugada %s:", i);
    
    let jugadaComputadora = obtenerJugadaComputadora();
    let jugadaUsuario = obtenerJugadaUsuario();
    let resultado = determinarGanador(jugadaUsuario, jugadaComputadora);
 
    console.log("La computadora eligió: %s", jugadaComputadora);
    console.log("El usuario eligió: %s", jugadaUsuario);
    console.log("El resultado fue: %s", resultado);

    if (resultado === "Gana la computadora") {
        victoriasComputadora++;
    } else if (resultado === "Gana el usuario") {
        victoriasUsuario++;
    }
}

console.log("Cantidad de victorias de la computadora:", victoriasComputadora);
console.log("Cantidad de victorias del usuario:", victoriasUsuario);

function ganadorFinal() {
    if (victoriasComputadora > victoriasUsuario) {
        console.log("El resultado de las %s rondas: Gana computadora", cantidadJugadas);
    } else if (victoriasComputadora < victoriasUsuario) {
        console.log("El resultado de las %s rondas: Gana usuario", cantidadJugadas);
    } else if (victoriasComputadora = victoriasUsuario) {
        console.log("El resultado de las %s rondas: Empate", cantidadJugadas);
    }
}

ganadorFinal();