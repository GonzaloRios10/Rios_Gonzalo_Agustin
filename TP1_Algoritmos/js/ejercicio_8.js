const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let aux = '';
let pos = 0;

let val = window.prompt("Ingrese un texto: ");
console.log(`Palabra: ${val}`);

for (let i = 0; i < val.length; i++) {
    console.log(`Letra: ${val[i]}`);

    for (let j = 0; j < vowels.length; j++) {
        if(val[i] === vowels[j]) {
            aux = val[i];
            pos = j+1;
            break;
        }
    }
}

console.log(`"${aux}" es la vocal N° ${pos} del array`);