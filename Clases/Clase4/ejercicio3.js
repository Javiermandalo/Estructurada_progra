
import readline from 'node:readline';

const palabrasJuntas = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

palabrasJuntas.question("Ingresa tu primera palabra", function(primLabra){
    palabrasJuntas.question("Ingresa tu segunda palabra", function(seguLabra){
        
        let palabjuntas = primLabra + seguLabra 
        
        console.log(`Las dos palabras juntas quedan ${palabjuntas}`);
        palabrasJuntas.close();
    });
});



