import readline from 'node:readline';
import { convertToObject } from 'typescript';

const tienda = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function descuento (valor) {
    const totalDes = valor * 0.10;
    return totalDes;
}

tienda.question("Ingrese el valor del precio del producto: ", (dato) => {
    const valor = parseFloat(dato);
    const montoDescuento = descuento();
    const totalPagar = valor - montoDescuento;

    console.log(`Descuento (10%): $${montoDescuento.toFixed(2)}`);
    console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);

    tienda.close();
});



