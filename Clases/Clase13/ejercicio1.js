
import readline from "node:readline";

const ejer = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

ejer.question("Ingrese codigo de departamento: ", function(code){

    code = code.toUpperCase();

    let departamento = code.slice(4,7);

    console.log(`El codigo ingresado es ${code}`);

    if(departamento == "VEN"){
        console.log(`El codigo pertenece al departamento de ventas`);
    }else{
        console.log(`El codigo no pertenece al departamento de ventas`);

    }
    ejer.close();
});