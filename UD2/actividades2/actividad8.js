let resultado = "Los numeros pares entre 25 y 1 son: ";
let minuendo = 25;
for(let i = 25; i > 1; i--){
    if(i % 2 == 0){
        resultado += `${i} `;
    }
}
alert(resultado);