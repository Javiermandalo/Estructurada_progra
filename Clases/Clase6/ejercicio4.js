import readline from 'node:readline';

const precioUnit = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

precioUnit.question('Ingrese el precio unitario del producto que comprara: ', function(unit){
    precioUnit.question('Ingrese la cantidad deseada de ese producto: ', function(cant){

        unit = parseFloat(unit);
        cant = parseInt(cant);

        let totalPAgar = unit * cant;

        console.log(`El total a pagar es: $${totalPAgar.toFixed(2)}`);
        precioUnit.close();

    });
});












