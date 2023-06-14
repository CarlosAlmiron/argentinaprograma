// 5. a. Crea un arreglo vacío con el nombre de frutas.
let frutas = [];

// b. Agrega cinco frutas distintas al arreglo. Puede ser mediante el uso de variables o no.
frutas.splice(0, 1, "banana", "manzana", "pera", "pomelo", "kiwi");

// c. Deberás obtener la última fruta agregada y guardarla en la variable ultima. Además deberás imprimir su valor por consola, respetando el siguiente formato “La ultima fruta agregada fue: [ultima]”
let ultima = frutas[4];
console.log("La ultima fruta agregada fue: %s", ultima);

// d. Deberás obtener la primera fruta agregada y guardarla en la variable primera. Además deberás imprimir su valor por consola, respetando el siguiente formato “La primera fruta agregada fue: [primera]”
let primera = frutas[0];
console.log("La primera fruta agregada fue: %s", primera);