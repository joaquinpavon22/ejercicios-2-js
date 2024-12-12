// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("Ingrese un numero de filas"));
let columnas = parseInt(prompt("Ingrese un numero de columnas"));

//validar las entradas

if (isNaN(filas) || filas <= 0 || isNaN(columnas) || columnas <= 0) {
  alert("Por favor ingrese un numero valido mayor que 0");
} else {
  let total = filas * columnas;
  document.write(
    '<table border="1" style="border-collapse: collapse; text-align:center;" > '
  );

  for (let i = 0; i < filas; i++) {
    document.write("<tr>");
    for (let j = 0; j < columnas; j++) {
      document.write(`<td>${total}</td>`);
      total--;
    }
    document.write("</tr>");
  }

  document.write("</table>");
}