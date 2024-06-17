let meses = [
    "Enero", 
    "Febrero", 
    "Marzo", 
    "Abril", 
    "Mayo", 
    "Junio", 
    "Julio", 
    "Agosto", 
    "Septiembre", 
    "Octubre", 
    "Noviembre", 
    "Diciembre"
];

let val = window.prompt("Ingrese un numero del 1 al 12: ");
val = parseInt(val);

if (val >= 1 && val <= 12) {
    meses.forEach((mes, indice) => {
        if (indice === val - 1) {
            alert(`Mes: ${mes}`);
        }
    });
} else {
    alert("Valor equivocado");
}