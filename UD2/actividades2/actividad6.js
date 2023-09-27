let numero1 = prompt("Pon un numero");
let numero2 = prompt("Pon un numero");
let operacion = prompt("Indica la operacion con +, -, *, /");

switch (operacion) {
    case '+':
        alert(parseFloat(numero1) + parseFloat(numero2))
        break;
    case '-':
        alert(parseFloat(numero1) - parseFloat(numero2))
        break;
    case '*':
        alert(parseFloat(numero1) * parseFloat(numero2))
        break;
    case '/':
        alert(parseFloat(numero1) / parseFloat(numero2))
        break;
    default:
        alert("El simbolo no coincide con ninguno de los sugeridos")
};