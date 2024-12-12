// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math()

let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
  let nombre = prompt(`Ingrese el nombre ${i + 1}: `);
  let edad = parseInt(prompt(`Ingrese la edad de ${nombre}: `));
  while (isNaN(edad) || edad < 0) {
    edad = parseInt(
      prompt(
        `La edad debe ser un número mayor o igual a 0. Ingrese la edad de ${nombre} nuevamente: `
      )
    );
  }
  nombres.push(nombre);
  edades.push(edad);
}

let mayorEdad = Math.max(...edades);
let indiceMayor = edades.indexOf(mayorEdad);
let nombreMayor = nombres[indiceMayor];

alert(`El nombre del mayor es: ${nombreMayor}`);
