/*Crear un script que genere una pirámide como el ejemplo con los números del 1 al
número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):*/
const prompt = require("prompt-sync")({sigint:true});
let numero;
let arrayNumero=[];
//numero=10;
numero=prompt("INGRESE UN NUMERO ENTRE 1 Y 10 INCLUIDOS");
if(numero>=1 && numero <=10){
    function crearArray(numero)
    {
        let arrayAuxliar=[];
        let i;
        for(i=0;i<=numero;i++)
        {
            arrayAuxliar[i]=i;   
        }
        return arrayAuxliar;
    }
    arrayNumero= crearArray(numero)
    for(i=1; i<=numero; i++)
    {  
        for(j=1; j<=i; j++)
        {        
        console.log(arrayNumero[j]);       
        }
        console.log("\n");
        arrayNumero[i+1];
    }
}else{
    console.log("ingrese un numero entre 1 y 10 incluidos"); 
}