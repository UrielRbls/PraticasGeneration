const calculadora = require('../calculadora');  //importamos la funcion suma de calculadora.js

//console.log(calculadora.suma);    //imprimimos la funcion suma

//Prueba unitaria
test(   //test es un metodo de JEST que nos permite realizar pruebas unitarias
    'Debe sumar numero a + b', //nombre de la prueba
    () => { //funcion que se ejecuta para realizar la prueba
        expect(calculadora.suma(10, 10)).toBe(20);  //toBe es un metodo de JEST que nos permite comparar el resultado de la funcion con el valor esperado
    }
);

test(
    'Debe restar numero a - b',
    () => {
        expect(calculadora.resta(100, 50)).toBe(50);
    }
);

test(
    'Debe multiplicar numero a * b', 
    () => {
        expect(calculadora.multiplicacion(10, 10)).toBe(100);
    }
);

test(
    'Debe dividir numero a / b', 
    () => {
        expect(calculadora.division(100, 10)).toBe(10);
    }
);














