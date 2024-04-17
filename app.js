import Calculadora from './calculadora.js';

const operaciones = new Calculadora();

try {
    console.log("Suma:", operaciones.suma(5, 3));
    console.log("Resta:", operaciones.resta(5, 3));
    console.log("Multiplicación:", operaciones.multiplicacion(5, 3));
    console.log("División:", operaciones.division(5, 0));
} catch (error) {
    console.error("Error:", error.message);
}
