function contarVocales(frase) {
    //convertir en minuscula
    frase = frase.toLowerCase();
    
    let contador = 0;
    let vocales = [];
  
    // recorre cada caracter en la frase
    for (let i = 0; i < frase.length; i++) {
      let caracter = frase[i];
      
      // comprobar si es vocal
      if (esVocal(caracter)) {
        contador++;
        vocales.push(caracter);
      }
    }
  
    // mostrar resultados
    console.log("Cantidad de vocales: " + contador);
    console.log("Vocales: " + vocales.join(", "));
  }
//   se define una función llamada esVocal
// test() se utiliza para verificar si está presente las vocales.
  function esVocal(caracter) {
    return /[aeiou]/.test(caracter);
  }
  
  const frase = prompt("Ingresa una frase:");
  contarVocales(frase);
  