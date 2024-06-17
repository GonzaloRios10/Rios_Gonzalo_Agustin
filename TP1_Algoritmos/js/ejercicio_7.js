var valores = [true, false, 2, "hola", "mundo", 3, "char"];

let aux = "";
let aux2 = "";
let num1 = null;
let num2 = null;

// Filtrar solo los elementos de texto
let textos = valores.filter(elemento => typeof elemento === 'string');

// Ordenar los elementos de texto por longitud
textos.sort((a, b) => a.length - b.length);

// Imprimir los elementos de texto ordenados
textos.forEach(texto => console.log(texto));

valores.forEach((valor) => {
    if (typeof valor === 'string' && valor.length > aux.length) {
        aux = valor;
    }

    if (typeof valor === 'number' && num1 === null) {
        num1 = valor;
    } else if (typeof valor === 'number' && num2 === null) {
        num2 = valor;
    }
});

console.log(`La cadena más larga es: ${aux}`);

console.log(`Suma: ${num1 + num2}`);
console.log(`Resta: ${num1 - num2}`);
console.log(`Multiplicación: ${num1 * num2}`);
console.log(`División: ${num1 / num2}`);
