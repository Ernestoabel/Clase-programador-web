const prompt = require("prompt-sync")({sigint:true});
let dato;
dato=prompt("Ingrese dato ");
function tipoDeDato(parametro){
    return typeof(parametro);
}
console.log(tipoDeDato(dato));