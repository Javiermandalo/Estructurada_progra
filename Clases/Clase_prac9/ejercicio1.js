function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}

function sumarHastaN(n) {
    if (n === 0) {
        return 0;
    }
    return n + sumarHastaN(n - 1);
}

const entrada = prompt("Ingrese un número entero no negativo:");
const numero = Number(entrada);

if (entrada !== null && entrada.trim() !== "" && Number.isInteger(numero) && numero >= 0) {
    console.log("El factorial de " + numero + " es: " + factorial(numero));
    console.log("La potencia de " + numero + " elevado a " + numero + " es: " + potencia(numero, numero));
    console.log("La suma de los números desde 1 hasta " + numero + " es: " + sumarHastaN(numero));
} else {
    console.log("Error: debe ingresar un número entero no negativo.");
}