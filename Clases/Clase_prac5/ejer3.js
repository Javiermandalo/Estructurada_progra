import readline from 'node:readline';

const ejer3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('ESTACIONAMIENTO');
console.log('1. Moto');
console.log('2. Auto');
console.log('3. Camioneta');
console.log('4. Bus');

ejer3.question("Ingrese el numero de su tipo de vehiculo: ", function(opcion){
    ejer3.question("Ingrese las horas de estacionamiento: ", function(horas){

        let opcion1 = parseInt(opcion);
        let cantHoras = parseFloat(horas);
        let tarifaHora = 0;
        let tipoVehiculo = "";
        let esValido = true;

        switch (opcion1) {
            case 1:
                tipoVehiculo = "Moto";
                tarifaHora = 1.00;
                break;
            case 2:
                tipoVehiculo = "Auto";
                tarifaHora = 2.00;
                break;
            case 3:
                tipoVehiculo = "Camioneta";
                tarifaHora = 3.00;
                break;
            case 4:
                tipoVehiculo = "Bus";
                tarifaHora = 5.00;
                break;
            default:
                esValido = false;
                console.log('Error: Tipo de vehículo no válido.');
                break;
        }

        if (esValido) {
            let subtotal = tarifaHora * cantHoras;
            let descuento = 0;

            if (cantHoras > 5) {
                descuento = subtotal * 0.20;
            }

            let total = subtotal - descuento;

            console.log(`Tipo de vehículo: ${tipoVehiculo}`);
            console.log(`Horas: ${cantHoras}`);
            console.log(`Tarifa por hora: $${tarifaHora.toFixed(2)}`);
            console.log(`Subtotal: $${subtotal.toFixed(2)}`);
            console.log(`Descuento: $${descuento.toFixed(2)}`);
            console.log(`Total: $${total.toFixed(2)}`);
        }

        ejer3.close();
    });
});