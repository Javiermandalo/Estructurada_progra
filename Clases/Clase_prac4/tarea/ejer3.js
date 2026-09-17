import readline from 'node:readline';

const ejer3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('1. Agua');
console.log('2. Refresco');
console.log('3. Jugo');
console.log('4. Café');
console.log('5. Té');

ejer3.question('Seleccione una opción de bebida: ', function(opcion){
    let n = parseInt(opcion);
    let bebida = "";
    let valida = true;

    switch (n) {
        case 1:
            bebida = "Agua";
            break;
        case 2:
            bebida = "Refresco";
            break;
        case 3:
            bebida = "Jugo";
            break;
        case 4:
            bebida = "Café";
            break;
        case 5:
            bebida = "Té";
            break;
        default:
            valida = false;
            console.log("Bebida no disponible");
            break;
    }

    if (valida) {
        console.log(`Ha seleccionado: ${bebida}`);
        if (bebida === "Refresco" || bebida === "Jugo") {
            console.log("¿Desea agregar hielo?");
        }
    }

    ejer3.close();
});