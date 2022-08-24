//La estructura IF, representa una CONDICION, que puede ser evaluada por VERDAD y por FALSO.

//La sintaxis de esta estructura es muy similar a la de otros lenguajes.

/*
if(condicion){
    codigo por VERDAD
}else{
    codigo por FALSO
}
*/

//Ejemplo:
//Dados dos numeros, mostrar el mayor.
/* num1=prompt("Ingrese el primer valor");
num2=prompt("Ingrese el segundo valor");
let num3=prompt("Ingrese el tercer valor");
if(num1>num2){
    console.log("El mayor es: ",num1);
}else{
    console.log("El mayor es: ",num2);
} */
//Ejemplo2
//Dados 3 numeros mostrar el mayor
/* if(num1>num2){
    if(num1>num3){
        console.log("El mayor es: ",num1);
    }if(num3>num2){
        console.log("El mayor es: ",num3);
    }else{
        console.log("El mayor es: ",num2);
    }
}else{
    if(num2>num3){
        console.log("El mayor es: ",num2);
    }else{
        console.log("El mayor es: ",num3);
    }
} */


//La estructura IF-ELSEIF, nos ayuda a organizar mejor nuestro codigo, ya que evita lineas adicionales.
//Su sintaxis es la siguiente.

/*
if(condicion){
    codigo
}else if(condicion){
    codigo
}else if(condicion){
    codigo
}
...
else{
    codigo
}
*/
/* if(num1>num2 && num1>num3 ){
    console.log(num1);
}else if(num2>num3){
    console.log(num2);
}else{
    console.log(num3);
} */

//Ejemplo3
//Crear un programa que nos permita seleccionar 1 de las 4 operaciones básicas, mediante el teclado.


//En algunas ocasiones, debemos especificar una conversion de datos para obtener el resultado correcto.
//En este caso debemos convertir la entrada a valores numericos.
//Para ello podemos utilizar la funcion ParseInt();
/* let n1=parseInt(prompt("Ingrese el primer valor"));
let n2=parseInt(prompt("Ingrese el segundo valor"));
let opcion=parseInt(prompt("Seleccione la operación\n1:Suma\n2:Resta \n3:Producto\n4:Cociente"));

if(opcion==1){
    let suma=n1+n2;
    alert("Suma: "+ suma);
    console.log("El resultado de la suma es: ", n1+n2);
}else if(opcion==2){
    console.log("El resultado de la resta es: ", n1-n2);
}else if(opcion==3){
    console.log("El resultado de la multiplicacion es: ", n1*n2);
} else if(opcion==4){
    if(n2==0){
        console.log("No se puede dividir entre cero");
    }else{
        console.log("El resultado de la division es: ", n1/n2);
    }
}else if(opcion>4 || opcion<1){
    console.log("Por favor inserte una opcion valida");
}  */ 


//El operador de comparacion, tiene dos modos, uno GENERAL y otro ESTRICTO.

//Ejemplo: 
// let a=3
// let b= "3"
// Si usamos el operador == obtendremos como resultado VERDAD
// Si usamos el operador === obtendremos como resultado FALSO

let a=6;
let b="6";
let comp=a==b;
console.log(comp);

comp= a===b;
console.log(comp);

//El porque de este resultado obedece a que en el primer caso == compara de forma general, es decir que para JS, 3 es igual a "3";

//En el segundo caso se realiza una compracion ESTRICTA, esto significa que solo obtendremos VERDAD, cuando los valores sean exactamente iguales, como es evidente el NUMERO 3, NO ES IGUAL A LA CADENA 3.  

//Esto tambien funciona para el operador diferente

// !=  Esto hace una comparacion general
// !== Esto hace una comparacion estricta

let c="hola";
let d="HOLA";
comp= c!=d;
console.log(comp);
comp= c!==d;
console.log(comp);

//Dados 3 numeros, descomponer cada numero en digitos y mostrarlos por consola.

//Ej. 12,67,12
//Salida:  1,2,6,7,1,2

