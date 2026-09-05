import readline from "node:readline";
import { couldStartTrivia } from "typescript";

const prome_Notas = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

prome_Notas.question ("Ingrese una primera nota: ", function(nota1){
    prome_Notas.question ("Ingrese una segunda nota: ", function(nota2){
        prome_Notas.question ("Ingrese una tercera nota: ", function(nota3){

            nota1 = Number(nota1);
            nota2 = Number(nota2);
            nota3 = Number(nota3);

            const promedio = (nota1 + nota2 + nota3)/3;

            console.log(`Su promedio es ${promedio.toFixed(2)}`);

            prome_Notas.close();
        });
    });
});

