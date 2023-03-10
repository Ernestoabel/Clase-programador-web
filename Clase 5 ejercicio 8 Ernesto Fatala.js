/* Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
luego recorriendolo para mostrar el resultado deseado del ejercicio. */
let menUno='Vamos ';
let menDos='San ';
let menTres='Lorenzo ';
let menCuatro='Ciclon ';
let menCinco='Ponga ';
let menSeis='Huvo ';
let menSiete='cancelar ';
let menOcho='Quiero ser campeon, soy de boedo';
let mensaje='';
let bandera;
let booleano;
do{
    booleano=mensaje.includes(menSiete);
    if(booleano!=true){
        bandera=1;
    }else{
    mensaje=menUno+menDos;
    mensaje+=menTres;
    mensaje+=menCuatro;
    mensaje+=menCinco;
    mensaje+=menSeis;
    mensaje+=menSiete;
    mensaje+=menOcho;
    }
}while(booleano!=true);
console.log(mensaje);
