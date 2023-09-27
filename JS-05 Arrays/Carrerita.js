let participantes = [];


let Participantes = ["participanteRoberto", "participanteAndrea", "participanteJorge", "participanteRamiro", "participanteSofia"];

console.log(typeof(Participantes)); //object
console.log(typeof(participantes));
console.log(Participantes.length);
console.log(Participantes);

participantes[1] = "participanteRoberto"


let corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];
console.log(corredores);

function jorgeAdelantaRoberto() {
    corredores.splice(2, 1);   //Eliminamos a Jorge de su posición original
    corredores.unshift("Jorge"); //Agregamos a Jorge en la primera posición
}
function ramiroAdelantaJorge() {
    corredores.splice(3, 1); //Eliminamos a Ramiro de su posición original
    corredores.unshift("Ramiro"); //Agregamos a Ramiro a la primera posición delante de Jorge
}
function robertoByeBye() {
    let indexRoberto = corredores.indexOf("Roberto"); //obtenemos el indice de Roberto
    corredores.splice(indexRoberto, 1); //eliminamos a Roberto de su posición actual
}
function andreaBajaPosicion() {
    let indexAndrea = corredores.indexOf("Andrea"…

