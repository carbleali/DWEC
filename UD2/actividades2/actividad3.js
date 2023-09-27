let hermanos = prompt("¿Cuantos hermanos tiene?");
let total = prompt("¿Cuanto es el coste de tu factura?")

if(hermanos >= 3){
    alert(`Tu total es: ${total * 0.85}`);
}
else if(hermanos >=1){
    alert(`Tu total es: ${total * 0.95}`);
}
else{
    alert(`Tu total es: ${total}`);
}