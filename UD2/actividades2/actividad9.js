let numero = parseFloat(prompt("Introduce el numero del cual quieres el factorial"));
let contador = parseFloat(numero) - 1;
while(contador != 0){
    numero *= contador;
    contador--;
}
alert(numero);