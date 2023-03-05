/*Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
Javascript.*/
const prompt = require("prompt-sync")({sigint:true});
let cadena;
//cadena="San Lorenzo";
cadena=prompt("Ingrese cadena ");
console.log(cadena.toLowerCase());
console.log(cadena.toUpperCase());