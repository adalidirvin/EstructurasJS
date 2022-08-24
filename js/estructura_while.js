//La estructura WHILE, es una estrutura cíclica, ya que ejecutará la acción o acciones indicadas, mientras no se cumpla la condición de salida.
//Esto nos ayuda a realizar una secuencia de acciones de forma repetitiva hasta el límite que nosotros establezcamos.

//? La sintaxis de esta estructura es la siguiente>>
/*
while( condición de salida ){
    código
}
*/

/* Por lo general la estructura while utiliza algunos elementos comunes:
    * contador
    * incremento de contador
*/

//Ejemplo: Mostrar los primeros n numeros naturales.

let n=prompt("Cuantos numeros se mostraran? ");
let contador=1;
while(contador<=n){
    console.log(contador);
    contador++;
}

//Ejemplo: Dado un numero mostrar todos sus divisores
//Ej. Entrada: 120 >> Salida: 2,3,4,5,6,8,10,12...
//Ej  Entrada: 10 >> Salida: 2,5
//Ej. Entrada: 13 >> Salida: ---

let numero=prompt("Ingrese el numero a descomponer");
