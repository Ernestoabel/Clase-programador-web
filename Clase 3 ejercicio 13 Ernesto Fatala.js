/* Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
través de su código y el script saca el descuento correspondiente por la consola*/
const prompt = require("prompt-sync")({sigint:true});
let codigo;
let precio=8450000;
let precioConDescuento;
//codigo="fiesta";
codigo=prompt("Ingrese el codigo (fiesta o focus): ");
if(codigo == "fiesta"){
    precioConDescuento = precio*.95;
}else if(codigo=="focus"){
    precioConDescuento = precio*.90;
}else{
    precioConDescuento = "No ingreso un codigo valido";
}
console.log(precioConDescuento)