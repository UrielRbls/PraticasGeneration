/**

Condiciones : alterar el orden natural del codigo estructura de control: cotrolar la ejecucion del codigo


Ciclos o bucles (loops)


Tambien conocidos como blucles, son estructuras de control que nos van a permitir ejecutar un bloque de codigo de forma repetida, hasta que se cumpla una condicion especifica.

Es importante usar ciclos para automatizar tareas repetitivas

En JS existen los siguiente cilos:
 
    - while
    - do while 
    - for 

Iterar: proceso de repetir una secuencia de instrucciones
Estructura de control: herramienta especial para crear algoritmos o programas mas dinamicos y flexibles.

 


// Funciones : reducir el codigo

// While: Ejecuta un bloque de codigo mientras se cumpla una condicion especifica. Este ciclo se repite mientras la condicion sea verdadera, y el bloque de codigo se ejecuta siempre y cuando la condicion se mantenga. La 
condicion se evalua antes de cada interaccion.



while (miCrushMeQuiere){
    console.log("Sere Feliz")
}

Analogia: Seguir una receta para preparar sopa

 Lista de ingredientes:
    - Zanahoria
    - Papas
    - Chayote
    - Limon
    - Agua
    - Espinaca

Vamos a agregar los ingredientes a la olla mientras tengamos ingredientes disponibles.

Paramos cuando ya no tengamos ingredientes.



*/

// let capacidadPacientes = 10;
// let pacientesEnConsultorio =15;


// while (pacientesEnConsultorio < capacidadPacientes){
//     //seguire dando sevicio
//     console.log("Seguimos dando servicio");
//     //aumento en uno mis pacientes
//     pacientesEnConsultorio++;
// }

/** Do While (hacer mientras)
 
Se ejecuta la instruccion, mientras sea verdadero (pedir perdon por ir a la fiesta)


El bucle -do while- se diferencia del while ya que aqui se ejecuta la intruccion al menos una vez, y luego se pregunta para saber si se sigue ejecutando o no.


do {
    // codigo a ejecutar
} while (condicion);
 

Analogia: Cuando preparamos un pastel

 */

//Ejemplo de un consultorio dental

var contadorPacientes = 0;

do {
    var nombre = prompt ("Ingresa el nombre de pacietes");
    if (nombre) {
        contadorPacientes ++;
    }
}while (contadorPacientes < 3);
if (contadorPacientes > 3);
alert("Se lleno el changarro")


console.log("Numero total de pacientes: " , contadorPacientes);

/**
 Se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realizar.
    
    - inicializacion: se ejecuta antes de que el bucle comience y se ua para establecer una variable de control (variable de inicio)
    - condicion: es el detonante que verificamos antes de  cada iteraccion, para saber si se sigue ejecutando o no(siempre y cuando sea verdadera)
    - expresion de iteracion (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.


    for (inicializacion; condicion ; expresion de iteracion) {
        //bloque de codigo a ejecutar
    }

 */

// Crea un codigo que imprima los numeros del 0 al 4

for (var valorInicial =0; valorInicial<5; valorInicial++) {

    console.log(valorInicial);
}

// Version mas "comercial"

for (var i =0; i<5 ; i++){
    console.log(i);
}


// Consultoriio dental


let cantidadDeCitasDiarias = 5;

for (let i = 1.; i <= cantidadDeCitasDiarias; i++) {
    var nombre = promt ("Ingrese el nombre del paciente" + i);
    console.log("Paciente con cita: " + nombre + i);
}




















































