/*Realizar una función que calcule el factorial de un número ingresado por el usuario (el
número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la
consola.*/
const prompt = require("prompt-sync")({sigint:true});
let numero;
numero=prompt("Ingrese dato ");
function calcularFactorial(dato){
    //let resultado;
    if(dato==0 || dato ==1){
        return 1;
    }else if(dato>1){
        return (dato * calcularFactorial(dato - 1));
    }else{
        return "Un numero negativo no puede ser factorizado";
    }
}
console.log(calcularFactorial(numero));
