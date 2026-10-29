function sumarPares(n) {
    if (n <= 0) {
        return 0;
    }
    return (2 * n) + sumarPares(n - 1);
}

function sumarImpares(n) {
    if (n <= 0) {
        return 0;
    }
    return (2 * n - 1) + sumarImpares(n - 1);
}

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("1. Sumar los primeros n números pares");
console.log("2. Sumar los primeros n números impares");
console.log("3. Calcular un término de Fibonacci");

const opcion = prompt("Seleccione una opción (1, 2 o 3):");

if (opcion === "1" || opcion === "2" || opcion === "3") {
    const entrada = prompt("Ingrese el valor de n:");
    const n = Number(entrada);

    if (entrada !== null && entrada.trim() !== "" && Number.isInteger(n) && n >= 0) {
        switch (opcion) {
            case "1":
                console.log("La suma de los primeros " + n + " números pares es: " + sumarPares(n));
                break;
            case "2":
                console.log("La suma de los primeros " + n + " números impares es: " + sumarImpares(n));
                break;
            case "3":
                console.log("El término F(" + n + ") de Fibonacci es: " + fibonacci(n));
                break;
        }
    } else {
        console.log("Error: debe ingresar un número entero no negativo.");
    }
} else {
    console.log("Opción inválida. Seleccione 1, 2 o 3.");
}

