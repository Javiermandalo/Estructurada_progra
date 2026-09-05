import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Inngrese su nombre: ",  (nombre) => {
    rl.question("Ingrese su edad: ", (edad) => {
        edad = parseInt(edad);
        if (edad >= 0  && edad <= 12){
            console.log
        }
    });
});







