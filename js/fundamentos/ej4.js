// Num: recibe un numero como parametro y verifica si se divide en 2
function Num(numero) {
  if (isNaN(numero)) {
    alert("El número no es valido");
  } else if (numero % 2 === 0) {
    return "El número es par";
  } else {
    return "El número es impar";
  }
}

let numero = parseInt(prompt("Ingresa un número:"));
let resultado = Num(numero);
document.write(resultado);
