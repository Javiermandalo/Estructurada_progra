import readline from 'node:readline';

const tabla = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

tabla.question("Ingrese un numero para mostrar su tabla de multiplicar: ", function(tabla_numero){
    let numero = parseInt(tabla_numero);
    
    for (let i = 1; i <= 10; i++) {
        let calculo =  i*numero
        console.log(`${tabla_numero} X ${i} = ${calculo}`);
    }
    tabla.close();
});