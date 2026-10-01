import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero N: ', (numero) => {
    let N = parseInt(numero);
    let divisores = 0;

    for (let i = 1; i <= N; i++) {
        if (N % i == 0) {
            divisores++;
        }
    }

    let listaPrimos = '';

    for (let i = 1; i <= N; i++) {
        let divisoresActual = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                divisoresActual++;
            }
        }

        if (divisoresActual == 2) {
            if (listaPrimos != '') {
                listaPrimos = listaPrimos + ', ';
            }
            listaPrimos = listaPrimos + i;
        }
    }

    console.log('=== ANALISIS DE PRIMOS ===');
    if (divisores == 2) {
        console.log('El numero ' + N + ' SI es primo.');
    } else {
        console.log('El numero ' + N + ' NO es primo.');
    }

    console.log('Numeros primos desde 1 hasta ' + N + ':');
    console.log(listaPrimos);

    rl.close();
});