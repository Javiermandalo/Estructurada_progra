import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el numero de referencia de 6 digitos: ", (numeroRe) => {

    
    let numeroRenum = Number(numeroRe);
    
    let numeroRestring = numeroRenum.toString();
    
    let numeroReSlice = numeroRestring.slice(0, 3);

    console.log(`Numero: ${numeroRenum}`);
    console.log(`Texto: ${numeroRestring}`);
    console.log(`Recorte: ${numeroReSlice}`);
    
    rl.close();
});