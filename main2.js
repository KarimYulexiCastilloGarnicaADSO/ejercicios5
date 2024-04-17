import { solicitarNumeros, solicitarOperacion } from './entradaDatos.js';
import { contarNumerosPrimos, promedioNumerosPrimos } from './numerosPrimos.js';
import { contarNumerosPares, promedioNumerosPares } from './numerosPares.js';

function main() {
    let numeros = solicitarNumeros();
    let operacion = solicitarOperacion();

    switch (operacion) {
        case 'a':
            console.log("La suma de los números es:", numeros.reduce((a, b) => a + b, 0));
            break;
        case 'b':
            console.log("La cantidad de números primos es:", contarNumerosPrimos(numeros));
            break;
        case 'c':
            console.log("La cantidad de números pares es:", contarNumerosPares(numeros));
            break;
        case 'd':
            console.log("El promedio de los números primos es:", promedioNumerosPrimos(numeros));
            break;
        case 'e':
            console.log("El promedio de números pares es:", promedioNumerosPares(numeros));
            break;
        default:
            console.log("Operación no válida.");
    }
}

main();
