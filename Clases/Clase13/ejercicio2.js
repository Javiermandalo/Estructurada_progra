import readline from "node:readline";

const saludo = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

saludo.question("Ingrese su nombre completo:", function(nombre){
    nombre = nombre.toLocaleUpperCase();
    
    let date = new Date();
    console.log(`Hora actual: ${date.toLocaleDateString()}`);

    let hora = date.getHours();

    if(hora < 12 ){
        console.log(`Buenos dias ${nombre}!!!`)
    }
    saludo.close();

});