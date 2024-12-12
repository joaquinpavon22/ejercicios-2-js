// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto=(prompt());
let vocales = ("(a, e, i, o, u, A, E, I, O, U)");
let contador ="";

for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }
  
  console.log("El texto tiene " + contador + " vocales.");