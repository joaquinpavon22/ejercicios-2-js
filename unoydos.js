/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje. */

let edad = prompt("Ingrese su edad");
if (isNaN(edad)) {
  alert("Por favor ingrese un número");
} else if (edad < 18) {
  alert("Aún eres menor de edad y no puedes conducir");
} else if (edad >= 18) {
  alert("Eres mayor de edad, ya puedes conducir");
}

let nota;
do {
  let entrada = prompt("Ingrese una nota del 0 al 10");
  console.log(typeof entrada);
  if (entrada == null || entrada == "") {
    alert("No se ingresó ninguna nota");
    break;
  }
  nota = +entrada;
  if (isNaN(nota)) {
    alert("introduce un número valido");
  } else if (nota < 0 || nota > 10) {
    alert("número erroneo");
  } else {
    switch (nota) {
      case 0:
      case 1:
      case 2:
        alert("Muy deficiente");
        break;
      case 3:
      case 4:
        alert("insuficiente");
        break;
      case 5:
      case 6:
        alert("Suficiente");
        break;
      case 7:
        alert("Bien");
        break;
      case 8:
      case 9:
        alert("Notable");
        break;
      case 10:
        alert("Sobresaliente");
        break;
    }
  }
} while (confirm("¿Desea continuar?"));
