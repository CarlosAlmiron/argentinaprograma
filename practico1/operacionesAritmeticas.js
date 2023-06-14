// 3.a. Crea cuatro variables que contengan valores numéricos.
let var1 = 5;   
let var2 = 6;
let var3 = 11;
let var4 = 7;

// b. Suma las dos primeras variables y guarda el resultado en otra variable. 
let sumaVar1Var2 = var1 + var2;

// c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
let restaVar3Var4 = var3 - var4;

// d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada resultadoFinal. El producto debe ser 44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
let resultadoFinal = sumaVar1Var2 * restaVar3Var4;

// e. Escribe un cálculo que verifique si resultadoFinal es un número par. Almacene el resultado en una variable llamada esPar.
let esPar = resultadoFinal % 2 === 0;

// f. Imprima por consola un mensaje con el siguiente formato: “Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La respuesta a verificar si el resultado final es par es: [esPar]”
console.log("Mis variables iniciales fueron: %i, %i, %i y %i. La respuesta a verificar si el resultado final es par es: %s", var1, var2, var3, var4, esPar);