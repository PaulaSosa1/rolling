// CalculoPerimetro: base y la altura del rectángulo como parametros
// calcula el perímetro con la fórmula 2 * (base + altura)
function CalculoPerimetro(base, altura) {
  let perimetro = 2 * (base + altura);
  return perimetro;
}

let base = parseFloat(prompt("Ingrese base rectángulo: "));
let altura = parseFloat(prompt("Ingrese altura del rectángulo: "));

let perimetro = CalculoPerimetro(base, altura);
document.write("El perímetro del rectángulo es: " + perimetro);
