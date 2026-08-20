import readline from 'node:readline';

const EuroDolares = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

EuroDolares.question('Ingrese la cantidad de dinero en dólares: ', function(dolares){
    EuroDolares.question('Ingrese el tipo de cambio actual delc euro: ', function(tipoCambio){

        dolares = parseFloat(dolares);
        tipoCambio = parseFloat(tipoCambio);

        let euros = dolares * tipoCambio;

        console.log(`Recibirá: €${euros.toFixed(2)}`);
        EuroDolares.close();

    });
});

