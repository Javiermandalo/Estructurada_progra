
import readline from 'node:readline';

const precioDest = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

precioDest.question("Ïngrese el precio del producto", function(precio){
    precioDest.question("Ingrese el porcentaje de descuento", function(descuento){
        

        precio = parseFloat(precio);
        descuento = parseFloat(descuento)/100;

        const precioDest = precio-(precio*descuento);

        console.log(`El total el total de la compra sin descuento es $${precio.toFixed(2)}`)
        console.log(`El descuento a aplicar es ${descuento}`);
        console.log(`El total con descuento es $${precioDest.toFixed(2)}`)

        precioDest.close();


    })
});

