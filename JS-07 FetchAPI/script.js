/*
APIs internas (API DOM, LocalStorage, Drag and Drop): Son todas aquellas APIs que vienen por default en el navegador.


- APIs externas (Google Maps, FakeStorage API, API PayPal, etc.): Son todas aquellas que tenemos que utilizar de proveedores externos.


Ejemplo de la licuadora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad.


Ventajas de utilizar APIs

    - Reestructurar y organizar los sistemas de forma que sean mas sencillos de usar
    - Permiten que los sistemas sean mas robustos
    - Reducen los costos de mantenimiento
    - Permiten que los sistemas sean escalables


    Asincronia


    Por defecto, JS se comporta de una forma sincrona (de arriba hacia abajo, de izquierda a derecha), es decir, utilizamos JS de una forma autobloqueante(si hay un error, lo que esta despues de ese error no se ejecuta).

*/

//Ejemplo de una operacion sincronica
// console.log("Inicia mi operacion sincrona");

// function dosSincronica(){
//     console.log("Dos")
// }

// function unoSincronico(){
//     console.log ("Uno");
//     dosSincronica();
//     console.log("Tres");
// }
// unoSincronico();
// console.log ("Finaliza mi operacion sincrona");

//Los casos donde me conviene tener operaciones sincronas, son (lectura de arrays, uso de algunos metodos de arrays, condicionales, ciclos, ejecuccion de funciones "normales").


/**

Asincronia es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar ciertos bloques de codigo sin tener que esperar a que termine su ejecucion, para ejecutar otras lineas de codigo. (dejar la carne en el asador mientras preparo otras cosas en el ejemplo de la carne asada).

 */

//Ejemplo de JavaScript Asincrono

console.log("Inicia mi operacion asincronica");
function dosAsync(){
    console.log("Uno");
    setTimeout(function(){ //setTime para ejecutar esta funcion despues de 3 segundos
        console.log("Dos");
    }, 3000);
}

function unoAsync(){
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Finaliza mi operacion asincronica");


/**

Mecanismos para manejar la asincronia 

Para controlar las asincronia en JS, podemos usar algunos de estos mecanismos:

    - callback: la forma msa clasica de manejar la asincronia. Se le conoce como (llamada de vuelta), basicamente es pasar una funcion como parametro de otra funcion, y se ejecutan una vez que se cumpla la condicion esperada.

    Metodo .map de los arrays


    - promesas: son objetos que van a representar un valor al momento de conectar con el servidor. Como su nombre lo indica, una promesa es algo que no sabemos si se va a cumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si no se cumple. La ventaja que tiene las promesas, esa que no se anidan. en una sola funcion podemos manejar ambas situaciones.
    
    Las promesas tienen 3 estados posibles:

        - pending: estado inicial, cuando se crea la promesa. Aqui aun no hay resultados.
        - fullfiled: cuando la promesa se resuelve con exito (resolve)
        - rejected: cuando la operacion asinacrona falla (reject)
    - async/await

 */

//Funcion especial para consumir APIs y manejar promesas

//intruccion de la conexion a mi servidor 
fetch("ttps://fakestoreapi.chom/products/1")

//dos escenarios (obtengo respuesta o no obtengo respuesta)
.then(datos => { //cuando la promesa se resuelve, ejecuto esta funcion
    console.log(datos);
    return datos.json(); //comvertir la respuesta

})

.catch(error =>{
    console.log("Error, no encotramos el producto");
    console.log(error.menssage);
})

/**
Sintaxis del fetch (con promesas)


fetch (url a consumir)
    .then (response=> resonse.text()) // manejo la respuesta
    .then (datos => console.log(datos)) //manejo el dato

    .catch(error => console.log(error));

 */
//asigno el fetch a una variable...
const conexion = fetch("ttps://fakestoreapi.chom/products/1");

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: ",conexion);

//referencia a mi fetch para poder usar sus metodos
conexion

//usar el motodo then para manejar la respuesta
.then(function (resultado){
    console.log("Dentrp de esta funcion que maneja la respuesta, encontraras: ", resultado);
    return resultado.json();
})

//uso del metodo then para manejar el producto(lo relleno con la respuesta)
.then(function(producto){
    console.log("informacion del producto: ", producto);
})


//uso el metodo catch para manejar el error (lo relleno con un error para que la caja no regrese vacia)






//Objeto JSON que voy a mandar a un servidor 
let paciente = {
    nombre: "Felipe",
    edad: 31,
    estatus: "Registrado"
}

console.log(paciente);

//Necesito convertirlo a una cadena de texto para que el servidor lo lea

let pacienteStrigifeado = JSON.stringify(paciente); 
console.log(pacienteStrigifeado);

let pacienteServidor = '{"nombre": "Felipe","edad":31,"estatus":"Registrado"}';

let pacienteJSON =  JSON.parse(pacienteServidor);
console.log(pacienteJSON);

//Si mando un JSON al servidor, los strigifeo
//


function generarTarjetaProducto(producto){


    createElement(img)
    img.src = producto.image;
    
}


//Metodo POST para enviar un nuevo producto a nuestra BD de la fakestoreAPI

fetch('https://fakestoreapi.com/products',{ //endpoint
            method:"POST",//especificar el tipo de metodo
            body:JSON.stringify(//intruccion para serializar el cuerpo de mi solicitud (para la interpretacion)
                {
                    title: 'Sopa Maruchan Habanero',
                    price: 13.5,
                    description: 'Deliciosa sopa maruchan de habanero',
                    image: 'https://media.justo.mx/products/041789001956.jpg',
                    category: 'Sopas Instantaneas'
                }
            )
        })
            .then(res=>res.json())//metodo para la respuesta (saber que mi producto llego con bien al servidor)
            .then(json=>console.log(json))//impresion

///
fetch('https://fakestoreapi.com/products',{ //endpoint
            method:"PUT", //especificar el tipo de metodo
            body:JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
                {
                    id: 1,
                    title: inputTitulo.value,
                    price: inputPrecio.value,
                    description: inputDescripcion.value,
                    image: inputImagen.value,
                    category: inputCategoria.value
                }
            )
        })
            .then(res=>res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
            .then(json=>console.log(json))//impresion en consola para revisar la info
