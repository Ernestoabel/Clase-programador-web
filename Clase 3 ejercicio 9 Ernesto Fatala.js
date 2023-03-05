/*9. Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
calificación resultante según la nota ingresada:
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente*/
//const prompt = require("prompt-sync")({sigint:true});
let nota;
nota=12;
//nota=prompt("Ingrese una nota ");
switch (nota){
    case 0:
    case 1:
    case 2:
    case 3:
        console.log("Muy deficiente");
        break;
    case 4:
    case 5:
        console.log("Insuficiente");
        break;
    case 6:
    case 7:
        console.log("Bien");
        break;
    case 8:
    case 9:
        console.log("Notable");   
        break;
    case 10:
        console.log("Sobresaliente");    
        break;
    default:
        console.log("No ingreso una nota valida (1 al 10)");          
}
