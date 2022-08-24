//*OPERADORES MATEMATICOS
//Operador +
//Operador -
//Operador *
//Operador /

//?Operador Modulo  %
//?Obtiene el residuo de una division

//?Operador Exponente **
//?Obtiene el resultado de elevar la base al exponente
//Ejemplo
console.log(num1**num2);

//OPERADORES DE ASIGNACION
// Operador =
// Sirve para asignar el valor de la derecha a la variable de la izquierda
// Ej. num1 = 7; En este caso 7 se asigna a num1

/* num3=num3+num1;
console.log("El valor de num3 es: ",num3); */
num3+=num1;
console.log("El valor de num3 es: ",num3);

/* num3=num3*num1;
console.log("El valor de num3 es: ",num3); */
num3 *= num1;
console.log("El valor de num3 es: ",num3);

num3=num3/num1;
num3 /= num1;

num3=num3-num1;
num3 -= num1;

num3=num3%num1;
num3 %= num1;

num3=num3**num1;
num3**=num1


num1=num1+num2;
num1=num2;

//OPERADORES DE COMPARACION

// Comparacion simple ==

let valor1=2;
let valor2= "2";
if(valor1==valor2){
    console.log("Son Iguales");
}else{
    console.log("Son Diferentes");
}

// Comparacion estricta ===

if(valor1===valor2){
    console.log("Son Iguales");
}else{
    console.log("Son Diferentes");
}

//Operador Diferente  !=
//Este operador evalua si los parametros son diferentes y devuelve VERDAD en ese caso.
if(valor1!=valor2){
    console.log("Son Diferentes");
}else{
    console.log("Son Iguales");
}
// Operador Diferente estricto !==
//En este caso devuelve verdad solo si la comparacion se hace de forma completa

if(valor1!==valor2){
    console.log("Son Diferentes");
}else{
    console.log("Son Iguales");
}