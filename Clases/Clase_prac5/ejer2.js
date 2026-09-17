import readline from 'node:readline';

const ejer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ejer.question('Lado 1: ', function(l1){
    ejer.question('Lado 2: ', function(l2){
        ejer.question('Lado 3: ', function(l3){
            let a = parseFloat(l1);
            let b = parseFloat(l2);
            let c = parseFloat(l3);

            if (a + b > c && a + c > b && b + c > a) {
                let tipo = '';

                if (a === b && b === c) {
                    tipo = "Equilátero";
                } else if (a === b || b === c || a === c) {
                    tipo = "Isósceles";
                } else {
                    tipo = "Escaleno";
                }

                let perimetro = a + b + c;

                console.log(`Triángulo: ${tipo}`);
                console.log(`Perímetro: ${perimetro}`);
            } else {
                console.log('No es un triángulo válido');
            }

            ejer.close();
        });
    });
});