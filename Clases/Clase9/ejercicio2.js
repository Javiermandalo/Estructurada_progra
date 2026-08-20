
import readline from "node:readline";
import { couldStartTrivia, nodeModuleNameResolver } from "typescript";

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese el nombre del evento: ", (evento)=>{

    let eventoMayusculas = evento.toUpperCase();
    console.log(`Entrada del nombre ${evento} \n Entrada de mayuscula: ${eventoMayusculas}`);
    rl.close();
});