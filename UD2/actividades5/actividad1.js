let nombre = prompt("Escriba su nombre");
let apellido1 = prompt("escriba su primer apellido");
let apellido2 = prompt("escriba su segundo apellido");
let salario = parseFloat(prompt("Di tu sueldo con decimales"))
let edad = parseInt(prompt("Di tu edad"))

if(1000 <= salario && salario <= 2000){
    if(edad > 45){
        salario = salario * 1.03;
    }
    else{
        salario = salario * 1.1;
    }
}
else if(salario < 1000){
    if(edad < 30){
        salario = 1100;
    }
    else if(30 <= edad && edad <= 45){
        salario = salario * 1.03;
    }
    else{
        salario = salario * 1.15;
    }
}

alert(
    `Datos:\n
    Nombre: ${nombre}\n
    Apellido1: ${apellido1}\n
    Apellido2: ${apellido2}\n
    Salario: ${salario}\n
    Edad: ${edad}
    `)