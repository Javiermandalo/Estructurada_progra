import readline from 'node:readline';

const ejerCajero = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;

console.log('1. Consultar saldo');
console.log('2. Retirar dinero');
console.log('3. Depositar dinero');
console.log('4. Salir');

ejerCajero.question('Seleccione una opción: ', function(opcionInput) {
    let opcion = parseInt(opcionInput);

    switch (opcion) {
        case 1:
            console.log(`Su saldo actual es: $${saldo}`);
            ejerCajero.close();
            break;

        case 2:
            ejerCajero.question('Ingrese el monto a retirar: ', function(montoRetiroInput) {
                let montoRetiro = parseFloat(montoRetiroInput);

                if (montoRetiro <= 0) {
                    console.log("Error: El monto a retirar debe ser mayor a 0.");
                } else if (montoRetiro % 5 !== 0) {
                    console.log("Error: El monto debe ser múltiplo de $5.");
                } else if (montoRetiro > saldo) {
                    console.log("Error: El monto excede el saldo actual.");
                } else {
                    saldo -= montoRetiro;
                    console.log(`Retiro exitoso. Su nuevo saldo es: $${saldo}`);
                }
                ejerCajero.close();
            });
            break;

        case 3:
            ejerCajero.question('Ingrese el monto a depositar: ', function(montoDepositoInput) {
                let montoDeposito = parseFloat(montoDepositoInput);

                if (montoDeposito <= 0) {
                    console.log("Error: El monto a depositar debe ser mayor a 0.");
                } else if (montoDeposito > 5000) {
                    console.log("Error: El depósito no puede exceder los $5000 en una sola transacción.");
                } else {
                    saldo += montoDeposito;
                    console.log(`Depósito exitoso. Su nuevo saldo es: $${saldo}`);
                }
                ejerCajero.close();
            });
            break;

        case 4:
            console.log("Gracias por usar el cajero");
            ejerCajero.close();
            break;

        default:
            console.log("Opción no válida");
            ejerCajero.close();
            break;
    }
});