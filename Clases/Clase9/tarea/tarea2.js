
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su codigo de estudiante (ejem. U20260736): ', (codigo) =>{

    let codigoRe = codigo.slice(0, 3);

    console.log(`Su codigo inicia con esos primeros 3 digitos ${codigoRe}`);
    rl.close();
});