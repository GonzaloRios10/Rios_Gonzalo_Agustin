let cont = 0, suma = 0, promedio = 0;

while (cont < 3) {
    let nota = parseFloat(window.prompt("Ingrese una nota: "));

    if (nota >= 1 && nota < 11) {
        suma += nota;
    } else {
        alert("Nota invalida!");
    }

    cont++;
}

console.log(`contador: ${cont}`);

promedio = suma / cont;

console.log(`Suma: ${suma}`);
console.log(`Promedio: ${promedio}`);

if (promedio < 5) {
    alert(`Reprobado`); 
} else if (promedio >= 6 && promedio <= 8) {
    alert(`Aprobado`); 
} else if (promedio > 8) {
    alert(`Sobresaliente`); 
}


