let numero = parseInt(prompt("Introduce un numero"));
let mensaje = "";

if(numero % 2 == 0){
    mensaje = `El numero ${numero} es par`;
}
else{
    mensaje = `El numero ${numero} es impar`;
}

if(numero % 3 == 0){
    mensaje +=", es multiplo de 3";
}

if(numero % 5 == 0){
    mensaje +=", es multiplo de 5";
}

alert(mensaje);