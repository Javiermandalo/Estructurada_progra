function crearMultiplicador(factor) {
    return function multiplicar(numero) {
        return numero * factor;
    };
}

const duplicador = crearMultiplicador(2);
const triplicador = crearMultiplicador(3);
const numero = 7;

console.log(`Duplicador: ${numero} x 2 = ${duplicador(numero)}`);
console.log(`Triplicador: ${numero} x 3 = ${triplicador(numero)}`);
