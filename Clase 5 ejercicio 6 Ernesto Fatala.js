/*Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.*/
let array=[];
for (let numeros=0;numeros<=9;numeros++ ){
    array[numeros] = Math.ceil(Math.random()*99);
    if(numeros===10){
        break;
    }
}
for (let dato of array){
    console.log(dato);
}