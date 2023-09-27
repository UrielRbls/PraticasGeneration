// Funciones 
// Programa para hacer limonada
function exprimirLimones(cantidad){
    console.log ("Exprimiendo" + cantidad + "Limones");
    let jugoExprimido = cantidad *10; //considerando obtener 10 ml de jugo por cada limon
    console.log ("Se obtuvo " + jugoExprimido + "ml de jugo de limon");
    return jugoExprimido; // return
}

// Funcion para mezclar el jugo de limon con agua y azucar
function mezclarJugoDeLimon (cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar){
    console.log ("Mezclando" + cantidadDeJugo + "ml de jugo de limon con " + cantidadDeAgua + "ml de agua"+ cantidadDeAzucar + "gramos de azucar")
}

//Funcion para servir Limonada
function servirLimonada () {
    console.log ("Sirviendo la limonada en un vaso");
    VasoDeLimonada = true;
}

// Funcion principal que prepare mi limonada
function prepararLimonada(cantidadDeLimon) {
    let jugoDeLimon = exprimirLimones (cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10); // Cantidades ficticias de jugo de limon, de agua y azucar.
    servirLimonada
}

// Llamamos a la funcion principal para preparar limonada
var VasoDeLimonada = false;
prepararLimonada(5); // Llamado al programa