let limpiezasDisponibles = prompt("¿Para cuántas limpiezas tienes material hoy?");
let limpiezas = 0;

do {
    //hacer limpieza
    limpiezas++;
    if (limpiezas == limpiezasDisponibles) {
        console.log("Última limpieza hecha, se acabó lo que se vendía.");
    }
} while (limpiezas < parseInt(limpiezasDisponibles));


// let limpiezasDisponibles = 5;//O también let limpiezasDisponibles = prompt(“¿Para cuántas limpiezas tienes material hoy?”);
// do{
//     //hacer limpieza
//     limpiezas++;
//     if (limpiezas == limpiezasDisponibles){
//         console.log(“Última limpieza hecha, se acabó lo que se vendía.”);
//     }
// } while (limpiezas < limpiezasDisponibles);



let rascadorActual = 0;
let rascadorDisponible = 10;

while(rascadorDisponible > rascadorActual){
    console.log ("Mantener publicacion activa");
    rascadorDisponible--;
}