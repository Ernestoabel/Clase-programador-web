/*Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
indique si ese texto es un palíndromo. Ejemplo de palíndromo: “Somos o no somos”*/
const prompt = require("prompt-sync")({sigint:true});
let cadena;
//cadena="Somos o no somos";
cadena=prompt("Ingrese frase ");
function palindrome(string) {
    var re = /[\W_]/g;
    var lowRegStr = string.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    if(reverseStr === lowRegStr){
        return "verdadero"
    }else{
        return "falso";
    }
   
  }
console.log(palindrome(cadena));