import readline from "node:readline";

const datoCualquiera = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

datoCualquiera.question("Ingrese un dato cualquiera: ", function(datoIngresado) {

    let valorConvertido = parseFloat(datoIngresado);
    let esNaN = isNaN(valorConvertido);

    console.log(`Dato ingresado por el usuario: ${datoIngresado}`);
    console.log(`Resultado de parseFloat(): ${valorConvertido}`);
    console.log(`Valor retornado por isNaN(): ${esNaN}`);

    datoCualquiera.close();

});