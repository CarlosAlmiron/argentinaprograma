// LISTA DE INVITADOS

let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];  
let admitidos = [];

for (let i = 0; i < personas.length; i++) {
    if (personas[i] === "Jose" || personas[i] === "Sofia" ) {
        rechazados.push(personas[i]);
    } else {
        admitidos.push(personas[i]);
    } 
}

// a.
for (let i = -1; i < admitidos.length; i++) {
    if (i === -1) {
        console.log("La lista de invitados admitidos es:");
    } else {
        console.log("- " + admitidos[i])
    }
}

// b.
for (let i = -1; i < rechazados.length; i++) {
    if (i === -1) {
        console.log("La lista de invitados rechazados es:");
    } else {
        console.log("- " + rechazados[i])
    }
}

// EXTRA

admitidos.sort();
rechazados.sort();

for (let i = -1; i < admitidos.length; i++) {
    if (i === -1) {
        console.log("La lista ordenada de invitados admitidos es:");
    } else {
        console.log("- " + admitidos[i])
    }
}

for (let i = -1; i < rechazados.length; i++) {
    if (i === -1) {
        console.log("La lista ordenada de invitados rechazados es:");
    } else {
        console.log("- " + rechazados[i])
    }
}