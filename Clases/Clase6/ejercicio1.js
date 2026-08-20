
import { realpath } from "node:fs";
import readline from "node:readline";

const wordHoras = readline.createInterface ({
    input: process.stdin,
    output: process.stdout

});

wordHoras.question("Ingrese el nombre del trabajador", function(nombre){
    wordHoras.question("Ingrese las horas trabajadas", function(horasWork){
        wordHoras.question("ingrese el pago por hora que recibe", function(pago){
        
        horasWork = parseFloat(horasWork);
        pago = parseFloat(pago);
        
        const pagofinal = horasWork*pago
            console.log(`${nombre} tu pago por tu trabajo es ${pagofinal.toFixed(2)} por semana`);
            wordHoras.close();``
        });
    });
});


