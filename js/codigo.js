let num1;
let num2;
let num3;
num1 = 2;
num2 = 4;
num3=10;
//num3 = prompt("Numero 3");

console.log("El resultado es ", num1 * num2);

//Estructuras de control

//IF
//Estructura Condicional, que permite evaluar dos opciones una por VERDAD y otra por FALSO.
if(num1>num2){
    console.log("El mayor es ", num1);
}else{
    console.log("El mayor es ", num2);
}

//?Ejercicio 1 - 2
//Dados 3 numeros ordenarlos de mayor a menor
//Ej. 2,1,5
//Salida: 1,2,5
//Salida: 5,2,1

//?Ejercicio 3
//Dados dos números, realizar 1 de las 4 operaciones básicas, basadas en una opción provista por el usuario.

let a=parseInt(prompt("Ingrese el primer numero"));
let b=parseInt(prompt("Ingrese el segundo numero"));
let opcion=parseInt(prompt("Escoja que operacion desea:\n1: SUMA\n2: RESTA\n3:MULTIPLICACION\n4:DIVISION\n5:MÓDULO\n6:EXPONENTE\n7:MÚLTIPLOS\n8:MÚLTIPLOS\n9:MÚLTIPLOS EN COMÚN"));

if(opcion==1){
    console.log("La suma es ",a+b);
} else if(opcion==2){
    console.log("La resta es ",a-b);
}else if(opcion==3){
    console.log("La multiplicacion es ",a*b);
}else if(opcion==4){
    if(b!=0){
        console.log("La division es ",a/b);    
    }else{        
        console.log("La division entre cero no esta definida");
    }    
}else if(opcion==5){
    //Modulo %
    console.log("El modulo de la operacion es ",a%b);
}else if(opcion==6){
    //Exponente **
    console.log("El resultado de la operacion es ",a**b);
}else if(opcion==7){
    //Dados dos numeros, responder si son multiplos y devolver el número por el cual son múltiplos.
    //Ej. 45, 5  Salida-> Son Multiplos (9)
    //Ej. 45, 4  Salida-> No son Multiplos
    //Ej. 56, 7  Salida-> Son Multiplos (8)
    let multiplo=0;
    if(a%b==0 && a>=b){
        multiplo=a/b;
        console.log("Los números son múltiplos (",multiplo,")");
    }else if(b>a && b%a == 0){
        multiplo=b/a;
        console.log("Los números son múltiplos (",multiplo,")");
    }else{
        console.log("Los números NO son múltiplos");
    }
}else if(opcion==8){
    //Obtener todos los divisores del primer numero
    //Ej. 120   Salida-> 2,3,4,6,10,12,40,60...
    let multiplo=2;
    while(multiplo<=(a/2)){
        if(a%multiplo==0){
            console.log(multiplo);
        }
        multiplo++;
    }
}else if(opcion==9){
    //Obtener los multiplos en comun de los dos numeros dados
    //Ej. 120,8  Salida-> 2,4
    //Ej. 56,7  Salida-> ---
    let multiplo=2;
    while(multiplo<=a/2 && multiplo<=b/2){
        if(a%multiplo==0 && b%multiplo==0){
            console.log(multiplo);
        }
        multiplo++;
    }
}else if(opcion==10){
    //Obtner los digitos de cada numero introducido y mostrarlos por pantalla
    //Ej. 
    //1256  
    //546
    //Salida -->  Numero1: 1,2,5,6 - Numero2: 5,4,6
}else if(opcion==11){
    //Obtner los componentes decimales de cada numero introducido y mostrarlos por pantalla
    //Ej. 
    //1256  
    //546
    //Salida -->  Numero1: 1000+500+50+6 - Numero2: 500+40+6
}
else{
    console.log("Por favor inserte valores del 1 - 9");
}


//DOM