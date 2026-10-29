function contarVocales(cadena) {
    if (cadena.length === 0) {
        return 0;
    }

    const vocales = "aeiouáéíóúü";
    const primera = cadena[0].toLowerCase();
    const cantidad = vocales.includes(primera) ? 1 : 0;

    return cantidad + contarVocales(cadena.slice(1));
}

function invertir(cadena) {
    if (cadena.length <= 1) {
        return cadena;
    }

    return cadena[cadena.length - 1] + invertir(cadena.slice(0, -1));
}

function esPalindromo(cadena) {
    const texto = cadena
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");

    function comprobar(texto) {
        if (texto.length <= 1) {
            return true;
        }

        if (texto[0] !== texto[texto.length - 1]) {
            return false;
        }

        return comprobar(texto.slice(1, -1));
    }

    return texto.length > 0 && comprobar(texto);
}

const entrada = prompt("Ingrese una palabra o frase:");

if (entrada !== null && entrada.trim() !== "") {
    console.log("Texto ingresado: " + entrada);
    console.log("Cantidad de vocales: " + contarVocales(entrada));
    console.log("Texto invertido: " + invertir(entrada));
    console.log("¿Es palíndromo?: " + (esPalindromo(entrada) ? "Sí" : "No"));
} else {
    console.log("Error: debe ingresar una palabra o frase.");
}