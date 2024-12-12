// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp



let resultado = "";

do {
  let palabra = prompt("Ingresa una palabra").trim();

  if (palabra === null || palabra === "") {
    alert("Debes ingresar una palabra válida.");
    continue;
  }

  if (resultado === "") {
    resultado = palabra;
  } else {
    resultado += "-" + palabra;
  }
} while (confirm("¿Deseas continuar?"));

document.write(resultado || "No se ingresaron palabras.");
