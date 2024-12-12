// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456

let numero = (prompt("inserte un numero"))
if(numero >50 || isNaN(numero) ){
    alert("Inserte un numero valido")
}else {
    for (let i = 1; i <= numero; i++) {
        let fila = "";
        for (let j = 1; j <= i; j++) {
            fila += j; 
        }
        console.log(fila);
    }
}

