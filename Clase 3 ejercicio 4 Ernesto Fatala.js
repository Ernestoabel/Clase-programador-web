/*. Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
calcular su perímetro, su superficie, e informar los mismos en consola.*/
let lado=12;
function calcularPerimetroSuperficieCuadrado(dato){
    let perimetro=dato*4;
    let superficie=dato*dato;
    console.log("El perimetro del cuadrado es: "+perimetro+"\nLa superficies es: "+superficie);
}
calcularPerimetroSuperficieCuadrado(lado);
