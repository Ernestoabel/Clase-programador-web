/*Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
devuelve si ese mes tiene 30 o 31 días.*/
const prompt = require("prompt-sync")({sigint:true});
let mes;
//mes=12;
mes=prompt("Ingrese el numero del mes: ");
switch (mes){
    case 1:
        console.log("Tiene 31 dias");
        break;
    case 2:
        console.log("Tiene 28 dias");
        break;
    case 3:
        console.log("Tiene 31 dias");
        break;
    case 4:
        console.log("Tiene 30 dias");
        break;
    case 5:
        console.log("Tiene 31 dias");
        break;
    case 6:
        console.log("Tiene 30 dias");
        break;
    case 7:
        console.log("Tiene 31 dias");
        break;
    case 8:
        console.log("Tiene 31 dias");
        break;
    case 9:
        console.log("Tiene 30 dias");   
        break;
    case 10:
        console.log("Tiene 31 dias");    
        break;
    case 11:
        console.log("Tiene 30 dias");     
        break;   
    case 12:
        console.log("Tiene 31 dias");   
        break;
    default:
        console.log("No ingreso un mes valido(1 al 12)");
        break;            
}