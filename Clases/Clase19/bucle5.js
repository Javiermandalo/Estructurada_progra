import readline from "node:readline";

const ejer3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ejer3.question("Ingrese el gasto diario de el estudiante: ",function (gasto){

    gasto = parseFloat(gasto);

    
    let gastoTotal = 0;

    for (let dia = 1; dia <= 6; dia++){
        gastoTotal = gastoTotal + gasto;
        console.log(`Dia ${dia}: gasto acumulado hasta el momento: $${gastoTotal.toFixed(2)}`);
        
    };

    console.log(`El gasto total en 6 dias es: $${gastoTotal.toFixed(2)}`);
    ejer3.close();
});