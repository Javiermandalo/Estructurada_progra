import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un código numérico de 8 dígitos: ', (entrada) => {
    
    
    let codigoNumerico = Number(entrada);
    
    
    let codigoTexto = codigoNumerico.toString();
    
    
    let primerosCuatro = codigoTexto.slice(0, 4);
    
    console.log(`Los primeros cuatro dígitos son: ${primerosCuatro}`);
    
    rl.close();
});