/*Rellena un array con los números del 1 al 10. Muéstralo por la consola.*/
let array=[];
for (let numeros=0;numeros<=9;numeros++ ){
    array[numeros] = numeros+1;
    if(numeros===10){
        break;
    }
}
for (let dato of array){
    console.log(dato);
}
