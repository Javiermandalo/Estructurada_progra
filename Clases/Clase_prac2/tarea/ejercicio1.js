import readline from "node:readline";

const nombres = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

nombres.question("Ingrese su nombre", function(nombre){

    let May_nombre = nombre.toLocaleUpperCase();
    let Extrac_nombre = nombre.slice(0,5);
    let Min_nombre = nombre.toLocaleLowerCase();

    console.log("Mayusculas " + May_nombre);
    console.log("Solo las primeros 4 letras " + Extrac_nombre);
    console.log("Minusculas " + Min_nombre);
    nombres.close();

});