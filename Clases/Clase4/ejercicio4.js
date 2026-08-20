

import readline from 'node:readline';

const palabrajuntas4 = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

palabrajuntas4.question ("Ingresa tu primera palabra", function(primeraLabra){
    palabrajuntas4.question ("Ingresa tu segunda palabra", function(segundaLAbra){
        palabrajuntas4.question ("Ingresa tu tercera palabra", function(tereceraLabra){
            palabrajuntas4.question ("Ingresa tu cuarta palabra", function(cuartaLAbra){

                let juntarPalabras = primeraLabra + segundaLAbra + tereceraLabra + cuartaLAbra;

                console.log(`Entonces, tus palabras juntas quedan: ${juntarPalabras}`);
            });
        });
    });
});















