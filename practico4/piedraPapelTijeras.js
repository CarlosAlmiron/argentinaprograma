// 2. Crea una función llamada obtenerJugadaComputadora que generará un número aleatorio entre 0 y 2 para representar las opciones:
//- 0 para "piedra",
//- 1 para "papel" y
//- 2 para "tijeras"    

function obtenerJugadaComputadora() {
    let piedraPapelTijeras = ["piedra", "papel", "tijeras"];
    let resultado = piedraPapelTijeras[Math.floor(Math.random()*3)];
    return resultado;
}


// 3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su elección a través de la consola. Los valores posibles son: piedra, papel o tijeras.

const readlineSync = require('readline-sync');

function obtenerJugadaUsuario() {
    let eleccion = readlineSync.question('Ingrese su eleccion (piedra, papel o tijeras): ');
    while (eleccion !== "piedra" && eleccion !== "papel" && eleccion !== "tijeras") {
    eleccion = readlineSync.question('Ingrese su eleccion (piedra, papel o tijeras): ');
    }
    return eleccion;
}

// 4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas de la computadora y del usuario. Implementa las reglas del juego para determinar el ganador y retorna el resultado.

function determinarGanador(obtenerJugadaUsuario, obtenerJugadaComputadora) {
    if ((jugadaUsuario === "piedra" && jugadaComputadora === "tijeras") || 
    (jugadaUsuario === "papel" && jugadaComputadora === "piedra") || 
    (jugadaUsuario === "tijeras" && jugadaComputadora === "papel")) {
        let ganador = "Gana el usuario";
        return ganador;
    } else if ((jugadaUsuario === "tijeras" && jugadaComputadora === "piedra") || 
    (jugadaUsuario === "piedra" && jugadaComputadora === "papel") || 
    (jugadaUsuario === "papel" && jugadaComputadora === "tijeras")) {
        let ganador = "Gana la computadora";
        return ganador;
    } else {
        let ganador = "Empate";
        return ganador;
    }
}

// 5. Llama a las funciones en el orden adecuado para ejecutar el juego:
// a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una variable.

let jugadaComputadora = obtenerJugadaComputadora();

// b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.

let jugadaUsuario = obtenerJugadaUsuario();

// c) Invoca la función determinarGanador pasando como argumentos las jugadas de la computadora y del usuario. Almacena el resultado en una variable.

let resultado = determinarGanador();

// 6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego (quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del resultado:
// La computadora eligio: [jugadaComputador]. El usuario eligio: [jugadaUsuario]. 
// El resultado fue: [Empate | Gana la computadora | Gana el usuario].

console.log("La computadora eligio: %s.", jugadaComputadora) 
console.log("El usuario eligio: %s.", jugadaUsuario)
console.log("El resultado fue: %s.", resultado)