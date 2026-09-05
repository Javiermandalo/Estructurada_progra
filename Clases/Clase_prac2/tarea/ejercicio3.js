import readline from "node:readline";

const nacimiento = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

nacimiento.question("Ingrese su año de nacimiento: ", function(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - Number(birthYear);

    console.log(`Tu edad aproximada es: ${age} años.`);
    
    nacimiento.close();
});
