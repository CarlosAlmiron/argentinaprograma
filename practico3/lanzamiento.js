// CUENTA REGRESIVA
// * Cree un bucle de 10 a 0. Ayuda: inicializador: let i = 10;
// * Para cada iteración, imprima por consola usando console.log.
// * Diferentes números de iteración requieren que se coloque un texto diferente en el párrafo para esa iteración (necesitará una declaración condicional):
//   - Si el número es 10, imprima "Cuenta regresiva 10" en el párrafo.
//   - Si el número es 0, imprime "Lanzamiento!", al párrafo.
//   - Para cualquier otro número, imprima solo el número al párrafo.
// * ¡Recuerda incluir un iterador!
// * Debes guardar este programa en un archivo llamado lanzamiento.js

for (let i = 10; i >= 0; i--) {
if (i === 10) {
    console.log("Cuenta regresiva 10");
} else if (i === 0) {
    console.log("Lanzamiento!");
    } else {
        console.log(i);
    }
}
