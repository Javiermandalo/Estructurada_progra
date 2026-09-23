import readline from 'node:readline';

const banco = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('SISTEMA DE ACCESO BANCARIO');
console.log('1. Débito');
console.log('2. Crédito');
console.log('3. Premium');

banco.question("Ingrese el tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium): ", function(tipoInput){
    banco.question("Ingrese el monto a retirar: ", function(montoInput){

        let tipoTarjeta = parseInt(tipoInput);
        let monto = parseFloat(montoInput);
        let limite = 0;
        let tarjetaValida = true;

        switch (tipoTarjeta) {
            case 1:
                limite = 500;
                break;
            case 2:
                limite = 1000;
                break;
            case 3:
                limite = 2000;
                break;
            default:
                tarjetaValida = false;
                break;
        }

        if (!tarjetaValida) {
            console.log("Tarjeta no válida");
        } else {
            if (monto > limite) {
                console.log("Límite excedido");
            } else if (monto % 10 !== 0) {
                console.log("El monto debe ser múltiplo de 10");
            } else {
                console.log("Retiro exitoso");
            }
        }

        banco.close();
    });
});