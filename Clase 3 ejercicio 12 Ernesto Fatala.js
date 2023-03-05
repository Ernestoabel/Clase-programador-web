/*Generar una función donde ingresen dos números, el primero corresponde a la
cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola*/
let datoUno=17;
let datoDos=5;
function calculosCajas(bultos,bultosXcaja){
    let cajasLlenas;
    let bultosSueltos;
    if(bultos>=bultosXcaja){
        cajasLlenas=Math.trunc(bultos/bultosXcaja);
        bultosSueltos=bultos%bultosXcaja;
        if(bultosSueltos==0){
        console.log("Llena "+cajasLlenas+" cajas");
        }else{
            console.log("Llena "+cajasLlenas+" cajas "+"y quedan "+bultosSueltos+" bultos sueltos");
        }
    }else{
        console.log("No puede llenar ni una caja");
    }
}
calculosCajas(datoUno,datoDos);

