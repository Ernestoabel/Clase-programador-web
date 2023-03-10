/**Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
consola */
let array=[];
let copia=[];
for (let numeros=0;numeros<=9;numeros++ ){
    array[numeros] = Math.ceil(Math.random()*99);
    if(numeros===10){
        break;
    }
}
for (let dato of array){
    copia[array]=dato;
}
/*Esta ben mostrado asi? o necestio el for of? */
console.log(copia);
