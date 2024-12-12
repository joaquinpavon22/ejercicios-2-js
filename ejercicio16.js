let texto = prompt("Ingrese una cadena de texto");
let textoRevertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoRevertido += texto[i];
}

console.log(textoRevertido);