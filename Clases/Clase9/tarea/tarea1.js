import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su nombre comopleto: ', (nombre) =>{
    let NOMBRE = nombre.toLocaleUpperCase();
    let mnombre = nombre.toLowerCase();
    console.log(`Su nombre en maayusculas es ${NOMBRE} su nombre en minusculas es ${mnombre}`);
    rl.close();
});