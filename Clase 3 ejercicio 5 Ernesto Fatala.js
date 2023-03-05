/*Generar una función que dada una temperatura en grados fahrenheit los convierta a
grados celsius*/
let temperatura=72;
function fahrenheitACelsius(fahrenheit){
    let celsius=(fahrenheit-32) * 5/9;
    console.log("Los grados: "+fahrenheit+" fahrenheit son: "+celsius+" grados celsius");
}
fahrenheitACelsius(temperatura);