/**

Estructurado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion(formas de programar)

    - Programacion imperativa: Basada en intrucciones detalladas a la computadora, ejecutamos en una secuencia determinada (C, C++, Java, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion de respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.

    Clases: Plantillas para crear objetos y nos ayudan a definir objetos y crear instancias (meterializacion) de este tipo.

    Objeti: Materializacion

 */

//Creando mi primera clase 

class persona {

    //1. Propiedades o atributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = "";
    email = "";
    telefono = "";
    rol = "";


    // 3. Defino un contructor que tomara los atributos como "material" para la instancia o creacion de mis objetos
    // El contructor es una funcion especial, cuya funcion es la de contruir o instanciar objetos
    // Al pasar los atributos como parametros es importante cuidar el orden en como fueron declarados
    constructor(nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;

    }

    //2. Metodos o comportamientos (funciones)
    //Para definir los metodos de mi objeto, ya no utilizo la palabra function
   
    hablar(){
        console.log("Hola, estoy hablando...");
    }//Cierre del método hablar()

    dormir(){
        console.log("Zzzzzz")
    }//Cierre del método dormir()

    mostrarInfo(){
        console.log("Nombre: " , this.nombre);
        console.log("Apellido: " , this.apellido);
        console.log("Edad: " , this.edad);
        console.log("Edad: " , this.email);
        console.log("Telefono: " , this.telefono);
        
    }//Cierre de metodo mostrar info

}//Cierre de mi clase persona

/*Instancia de objetos del tipo persona

Sintaxis basica de una instancia

variable nombreObjeto = palabra reservada new nombreClase (parametros o atributos)

*/

let persona1 = new persona("Felipe", "Maqueda", 31, "felipemaqueda@mail.com", "5512345678");
let persona2 = new persona("Naruto", "Uzumaki", 22, "naruto@hokae", "1234567800");
let persona3 = new persona("Uriel", "Robles", 27, "urielrobles@mail.com", "1234567890")
let persona4 = new persona("Rick", "Sanchez", 70, "rickysanchez@portalmail.com", "0987654321")
let persona5 = new persona("Felipe", "Maqueda", 31, "felipemaqueda@mail.com", "5512345678");



//Imprmir el objeto completo
console.log(persona1, persona5.apellido);


//Imprimir un atributo de un objeto (apellido)
console.log(persona1.apellido);

//Invocar el metodo del objeto
persona1.dormir();
persona5.mostrarInfo();




//Mostrar un objeto similar a este 
let Felipe = {
    nombre: "",
    apellido:"",
    edad:"",
    email: "",
    telefono: "",
    rol: "",    
}

/**
Existen 4 pilares de la POO que nos permiten ampliar las caracteristicas y dotar de funcionalidades y opereaciones a nuestro codigo.

    - Herencia
    - Polomorfismo
    - Encapsulamiento
    - Abstraccion

 */

//Creando una nueva clase para aplicar la herencia

class paciente extends persona{

    //1. Definicion de atributos o propiedades
    doctorAtiende = ""; //nombre del doctor atiende
    historialMedico = ""; //si o no el historial
    alergias = ""; //alergias existentes 


    //3. Generacion de contructor 
    constructor (nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){
        super (nombre, apellido, edad, email, telefono); //super indica que traemos cosas de la clase superior 
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;
    }

    //2. Metodos 
    mostrarInfo(){
        console.log("Nombre: " , this.name);
        console.log("Apellido: " , this.apellido);
        console.log("Edad: " , this.edad);
        console.log("Email: " , this.email);
        console.log("Telefono: " , this.telefono);
        console.log("Doctor que atiende: " , this.doctorAtiende);
        console.log("Historial Medico: " , this.historialMedico);
        console.log("Alergias: " , this.alergias);
    }//Cierre del método mostrarInfo()
}


//Instancia de una paciente
let paciente1 = new paciente("Jesus", "Gonzales", 31, "jesusgonzales@hotmail.com", "5512345678", "Doctor Chapatin", "No tiene", "Penicilina");

//Imprimir objeto paciente
console.log(paciente1);

//Uso del metodo mostrar info
paciente1.mostrarInfo();

//Todas las claves y los valores van dentro de comillas
//Envio de informacion a servidores

let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

//Tratar la informacion y sacar datos especificos para DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}

/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicizializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.

    Atributos:
        - nombre
        - nota (calificacion)
    
    Metodos:
        - Constructor 
        - Metodo evaluacion (si aprueba)
        - Metodo imprimirInfo (nombre y la nota)

    Logica del negocio:
        - If para evaluar la nota (si es menor a 6 esta reprobado)
        - Recuperamos la informacion por medio de un prompt 
        - Generamos 3 instancias para probar mi codigo(la nota sea igual a 6, la nota sea menor 6, la nota sea mayor a 6)

*/

//Creacion de la clase (3 pasos)

class alumno {

    // 1. Atributos o propiedades
    nombre;
    nota;


    // 3. Constructor donde le di identidad a mi objeto (this)
    constructor (nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
    }

    // 2. Metodos
    //Metodo general, un metodo que no requiere personalizacion porque aplica cualquier objeto
    evaluacion(nota){

        if (nota >= 6){
            console.log("Aprobado");
        }else{
            console.log("Reprobado");
        }

    }

    imprimirInfo(nombre, nota){
        console.log("Nombre del alumno: " , this.nombre);
        console.log("Nota del alumno: ", this.nota);
    }
}

//Instancias de alumnos
let alumno1 = new alumno ("Felipe", 3);
let alumno2 = new alumno ("Felipe", 8);
let alumno3 = new alumno ("Felipe", 6);


//Invocando metodos 
alumno1.evaluacion(alumno1.nota); //Aprobado
alumno2.evaluacion(alumno2.nota); //Reprobado
alumno3.evaluacion(alumno3.nota); //Aprobado






























































