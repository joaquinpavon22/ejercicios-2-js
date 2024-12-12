// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:

// Input: Hola mundo

// Output: la vocal ‘o’ está en la posición 1


let texto = (prompt("Ingrese un texto"));

let vocales = ("a, e, i, o, u, A, E, I, O, U");
let contador = "";


for (let i = 0; i < texto.length; i++) {
    if (texto.includes(texto[i])){
        contador++
    }
    
}

console.log("La vocal esta en la posición " + contador );