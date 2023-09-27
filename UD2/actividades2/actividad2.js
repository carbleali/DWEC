let ciudad = prompt("¿En que ciudad vives?");
let edad = prompt("¿Cuantos anos tienes?");

if(ciudad == "Alicante" && edad > 18 && edad < 35){
    alert("Puede acceder al carnet de empresarios emprendedores");
}
else{
    alert("No puede acceder al carnet de empresarios emprendedores");
}