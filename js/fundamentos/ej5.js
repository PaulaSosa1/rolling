// verifica la cadena de texto
// UpperCase: en mayúsculas 
// LowerCase: en minuscula
// si no cumple la condicion es que contiene M y m
function TextoIngresado(cadena) { 
    if (cadena === cadena.toUpperCase()) { 
      return "El texto contiene solo mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
      return "El texto contiene solo minúsculas.";
    } else {
      return "El texto contiene mayúsculas y minúsculas.";
    }
  }
  
  let texto = prompt("Ingresa un texto: ");
  let resultado = TextoIngresado(texto);
  document.write(resultado);