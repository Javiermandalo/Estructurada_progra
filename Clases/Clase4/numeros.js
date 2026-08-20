import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su primer numero", function(numero1){
    rl.question("Ingrese su segundo numero", function(numero2){

        numero1= Number(numero1);
        numero2= Number(numero2);

        let suma = numero1 + numero2 

        console.log(`La suma de los numero es ${suma}`)
        rl.close();

    });
});


