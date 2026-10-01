import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero entero positivo: ', (numero) => {
    let n = parseInt(numero);
    let factorial = 1;
    let operacion = '';

    for (let i = n; i >= 1; i--) {
        factorial = factorial * i;
        operacion = operacion + i;

        if (i > 1) {
            operacion = operacion + ' x ';
        }
    }

    if (n === 0) {
        operacion = '1';
    }

    console.log('=== CALCULATING FACTORIAL ===');
    console.log(n + '! = ' + operacion + ' = ' + factorial);

    rl.close();
});