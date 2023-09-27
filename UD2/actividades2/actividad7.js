let bucle = true;
let resultado = 0;
let numero;
while(bucle){
    numero = parseFloat(prompt("Indique numero a sumar, si pone 0 se acaba el programa"));
    if(numero == 0){
        bucle = false;
    }
    else{
        resultado = parseFloat(resultado) + parseFloat(numero);
    }
}

alert(`El resultado es ${resultado}`);