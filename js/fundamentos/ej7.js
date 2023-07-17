function tablaMultiplicar(numero) {
    console.log("Tabla de multiplicar del " + numero + ":");
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  
  let numeroIngresado = parseInt(prompt("Ingresa un número para obtener su tabla de multiplicar: "));
  tablaMultiplicar(numeroIngresado);