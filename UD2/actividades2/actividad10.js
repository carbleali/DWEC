let numero1 = prompt("Di un numero a adivinar");
let encontrado = false;
let numero2;
while(!encontrado){
    numero2 = parseFloat(prompt("Di numero a ver si aciertas"));
    if(numero2 == numero1){
        alert("has acertado el numero!")
        break;
    }
    else if(numero2 > numero1){
        alert("el numero es mas pequeño")
    }
    else if(numero2 < numero1){
        alert("el numero es mas grande")
    }
}
