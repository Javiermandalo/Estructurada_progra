const notas = [8, 7, 9, 6, 10];

function calcularPromedio(valores) {
    const total = valores.reduce((acumulado, valor) => acumulado + valor, 0);
    return total / valores.length;
}

const promedio = calcularPromedio(notas);

console.log(`Notas: ${notas.join(", ")}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);
