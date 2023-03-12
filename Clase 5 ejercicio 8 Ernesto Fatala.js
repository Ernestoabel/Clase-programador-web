/* Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
luego recorriendolo para mostrar el resultado deseado del ejercicio. */
let mensaje;
let guion='-';
let frase='';
let array=[];
let indice=0;
do{
    mensaje=prompt("Ingrse una palabra de la cadena: ");
    if(mensaje!='cancelar'){
        frase+=mensaje;
        frase+=guion;
        array[indice]=mensaje+guion;
    }
    indice++;
}while(mensaje.includes("cancelar")!=true);
    
console.log(frase);
for(let verArray of array){
    console.log(verArray);
}
