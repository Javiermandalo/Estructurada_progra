import readline from 'node:readline';

const empresa = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

empresa.question("Ingrese cuantos productos fabrico la empresa: ", function(productos){
    let productos_totales = parseFloat(productos); 
    let defectuosos = 0;

    for (let i= 1; i <= productos_totales; i++) {
        if ( i % 3 == 0) {
            console.log(`Defectuosos ${i}`)
        };
    };
    console.log(`Hay ${defectuosos} productos defectuosos`);
});
