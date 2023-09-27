console.log ("Hola Mundo");



/**

Cuando hablamos del flujos de control hablamos del orden natural en el que se ejecuntan las intrucciones de nuestro programa (arriba/abajo, izq/der). Estas intrucciones pueden ser una funcion, un console. log, un cliclo, etc.


La importancia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o intrucciones dependiendo de una condicional (un elemento o intruccion detonante).



Condicionales

Las condicionales son palabras reservadas que nos permiten evaluar si una condicion se cumple o no, bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partiran de un true o false.


Tengo la camisa limpia?
    Si: voy a la fiesta
    No: Me quedo en casita





Condicional if (Si)

If nos sirve para validar si una condicion se cumple o no. Si se cumple, entonces ejecutamos un bloque de codigo que esta dentro del if. Si no se cumple, entonces no hacemos nada. 
Nota: Es la condicion mas sencilla, pero la mas limitante porque solo nos da una opcion.


if (condicion) {
    //bloque de codigo que se ejecuta si la condicion es verdadera (se cumple)
}


// Ejemplo: Felipe va a ir a una fiesta y necesita tener su camisa favorita limpia para poder ir 



 */


if (camisaLimpia = true){ //siempre tiene que ser par aque se ejecute con codigo
    console.log("Felipe va a la fiesta con if");
}


/**
 
else (de otro modo, de lo contrario, si no)


if (condicion detonante) {
    //bloque de codigo que se ejecuta si la condicion es verdadera
} else {
    // bloque de codigo que se ejecuta si la condicion es falsa
}


 */


if (camisaLimpia = false){
    console.log("Felipe va a la fiesta con if else"); //true
} else {
    console.log("Felipe se queda en su casa a hacer la lloracion"); //false
}


/**
 
else if 


Esta condicion nos ayuda a jugar con mas opciones y mas detonantes, par tener muchas posibilidades en el mismo codigo. Para lograr esto, a unir el else con el if


if (condicion detonante){
    //bloque de codigo si la condicion es verdadera
} else if (condicion detonante 2) {
    // bloque de codigo si la condicion 1 es falsa y la condicion 2 es verdadera
} else {
    // bloque de codigo si las dos condiciones son falsas
}


//Ejemplo 2: Felipe tiene hambre, y quiere comer chilaquiles verdes


 

if (hambre=true){
    console.log("Felipe va a comer");
} else if (chilaquiles = true) {
    console.log("Felipe come chilaquiles");
} else {
    console.log("Felipe no come y se pone triste")
}

*/

//Ejemplo 3: Escribe un programa que me muestre 3 mensajes diferentes. El primer mensaje se muestra si son las 13:00 hrs y debera imprimir "vamos a descanso". El segundo mensaje se muestra si son las 14:30 hrs y debera imprimir "vamos a comer". El tercer mensaje se muestra si no se cumple nada de lo anterior y debera imprimir "lo siento mi ciela, seguimos programando seguimos programando."




// Prompt es una forma de ingresar datos y poder hacer uso de ellos

let hora = prompt ("Hola, dime un numero");


// let hora = 17;
if (hora == 13){
    console.log("Vamos a descanso");
} else if (hora == 14){
    console.log("Vamos a comer");
} else {
    console.log("Lo siento mi ciela, seguimos programando"); 
}


/**
 
Switch (cambiar o intercambiar / segun sea el caso)

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de la opcion deseada (estado de la variable)

Evalua una expresion comparando el valor de una variable con la expresion o caso, y ejecuta las declaraciones asociadas con ese caso, asi como los casos que siguen.


Elementos principales del switch" un valor a evaluar, un detonante para cada caso, una salida para cada caso y una salida en general.
*/

let piso = 5;

    if (piso == 1){
        console.log("Llegamos al piso 1");
    } else if (piso == 2){
        console.log("Llegamos al piso 2");
    } else if (piso == 3){
        console.log("Llegamos al piso 3");
    } else if (piso == 4){
        console.log("Llegamos al piso 4");
    } else if (piso == 5){
        console.log("Llegamos al piso 5");
    } else {
        console.log("Piso no encontrado");
    }







// Elevador con switch

let pisoSwitch = prompt("A que piso vas");
console.log(typeof(pisoSwitchOriginal));
pisoSwitch = parseInt(pisoSwitchOriginal);


switch (pisoSwitch){
    case 1: //caso evalua un string
        console.log("Llegaste al piso 1");
        break;
    
    case 2:
        console.log("Llegaste al piso 1");
        break;

    case 3:
        console.log("Llegaste al piso 1");
        break;
    default:
        console.log("Llegaste al piso 1");
        break;
}
 

//Funciones aplicables a un consultorio dental

//Funcion calcular costo de una consulta (condicionales)

let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;

function calcularCostoConsulta (tipoServicio, tiempoConsulta, emergencia, promocion){

    tipoServicio = "extraccion";
    tiempoConsulta = 120;
    promocion = .10;
    clienteFrecuente = true;
    costo = 5000;
    
    //Calcular el costo total (antes de validar si es cliente frecuente)
    let costoTotal = costo - promocion;

    //Codicional para saber si agrego otra promocion por ser cliente frecuente

    if (clienteFrecuente == true){
        invocacion
    }
}


//Un ejemplo mas secillo
function calcularCostoConsultaDos (duracionMinutos, costoPorMinuto, clienteFrecuente){
    let costoTotal = duracionMinutos * costoPorMinuto;

    if (clienteFrecuente){
        costoTotalConDescuento = costoTotal*.9;
    }

    return costoTotalConDescuento;
}

console.log(calcularCostoConsultaDos (45, 15, true));















