
import readline from 'node:readline';

const gratis = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

gratis.question("Ingrese el nombre" , function(nombre){
    gratis.question("Ingrese el total de la compra:", function(compra){

        compra = parseFloat(compra)
        
        if (compra >= 50){
            console.log(`${nombre} su compra es de ${compra} y su envio es gratis`)
            gratis.close();
        }
        else if (compra < 50){
            console.log(`${nombre} su compra es de ${compra}`)
            gratis.close();
        }

    });
});