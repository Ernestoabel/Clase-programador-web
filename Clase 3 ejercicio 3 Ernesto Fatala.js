let datoUno=5;
let datoDos=25;
console.log("Dato Uno: "+datoUno+" "+"Dato Dos: "+datoDos);
function cambioDeVariable(primero,segundo){
    if(primero != segundo){
        let auxiliar=segundo;
        segundo=primero;
        primero=auxiliar;
        console.log("Cambio realizado\nDato Uno: "+primero+" "+"Dato Dos: "+segundo);
    }else{
        console.log("Los numeros son iguales");
    }
}
cambioDeVariable(datoUno,datoDos);