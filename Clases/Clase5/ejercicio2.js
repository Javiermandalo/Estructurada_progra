
import readline from "node:readline";

const trianguloBase = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

trianguloBase.question ("Ingrese la base:", function(base){
    trianguloBase.question("Ingrese la altura: ", function(altura){

        
        const area = Number(base) * Number(altura);

        console.log(`El area de su triangulo es ${area}`);
        trianguloBase.close();

    });
});