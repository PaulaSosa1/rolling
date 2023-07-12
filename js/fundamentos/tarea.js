function contarVocales(frase) {
    // Convertir la frase a minúsculas para evitar problemas de comparación
    frase = frase.toLowerCase();
    
    let contador = 0;
    let vocales = [];
  
    // Recorrer cada caracter en la frase
    for (let i = 0; i < frase.length; i++) {
      let caracter = frase[i];
      
      // Comprobar si el caracter es una vocal
      if (esVocal(caracter)) {
        contador++;
        vocales.push(caracter);
      }
    }
  
    // Mostrar la cantidad de vocales y las vocales encontradas
    console.log("Cantidad de vocales: " + contador);
    console.log("Vocales: " + vocales.join(", "));
  }
  
  function esVocal(caracter) {
    return /[aeiou]/.test(caracter);
  }
  
  // Ejemplo de uso
  const frase = prompt("Ingresa una frase:");
  contarVocales(frase);
  