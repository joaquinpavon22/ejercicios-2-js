// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let numero = (prompt("inserte un numero"))
if(numero >50 || isNaN(numero) ){
    alert("Inserte un numero valido")

}


for (let i = numero; i>1; i--){
    let fila = i.toString().repeat(i);
    console.log(fila);
}