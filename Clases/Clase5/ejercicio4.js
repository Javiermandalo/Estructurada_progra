
import readline from "node:readline";

const compra = readline.createInterface ({
    input: process.stdin,
    output: process.stderr
});

compra.question("Ingrese el nombre del producto:", function(nombreProduct){
    compra.question("Ingrese su precio unitario:", function(precioUnit){
        compra.question("Ingrese la cantidad comprada de ese producto: ", function(cantidad){

            precioUnit = Number(precioUnit);
            cantidad = Number(cantidad);

            const totalPagar = cantidad * precioUnit;
            
            console.log(`Su total a pagar es: ${totalPagar}`);
            compra.close();
        });
    });
});


