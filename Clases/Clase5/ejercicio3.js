
import readline from "node:readline";

const horasMinutos = readline.createInterface ({
    input: process.stdin,
    output: process.stderr
});

horasMinutos.question("Ingrese la cantidad de horas a convertir:", function(horas){

    horas = Number(horas);

    const min = (horas * 60);

    console.log("Su cantidad de horas convertido a minutos es: ", min);
    horasMinutos.close();
});
