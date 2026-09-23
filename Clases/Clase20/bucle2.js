import readline from 'node:readline';

const cine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

cine.question("Ingrese los boletos a comprar: ", function(cantBoletos){
    let boleto = parseFloat(cantBoletos);

    for (let i = 1; i <= boleto; i++) {
        let precio = 4;
        
        if (boleto >= 5){
            precio = precio - 1;
            console.log(`Boleto ${boleto}: Tiene descuento. Precio:$${precio.toFixed(2)}`);
        } else {
            console.log(`Boleto ${boleto}: No tiene descuento. Precio:$${precio.toFixed(2)}`);
        }  
    };
    cine.close();
});