import readline from 'node:readline';

const ejer2 = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

console.log('Menu');
console.log('1. Compra normal ($0.00)');
console.log('2. Compra con envío ($3.50)');
console.log('3. Compra con empaque especial ($2.00)');

ejer2.question('Ingrese el nombre del producto: ', function(producto){
    ejer2.question('Ingrese precio del producto: ', function(precio){
        ejer2.question('Cantidad comprada: ', function(cantidad){
            producto = producto.toUpperCase();
            precio = parseFloat(precio);
            cantidad = parseFloat(cantidad);
            let totalPAgar1 = (precio * cantidad) + 0.00;
            let totalPAgar2 = (precio * cantidad) + 3.50;
            let totalPAgar3 = (precio * cantidad) + 2.00;

            ejer2.question('Ingrese la opcion deacuerdo al menu: ', function(opcion){
                opcion = parseInt(opcion);
                console.log('Menu');
                console.log('1. Compra normal ($0.00)');
                console.log('2. Compra con envío ($3.50)');
                console.log('3. Compra con empaque especial ($2.00)');

                switch (opcion) {
                    case 1: 
                    console.log('DETALLE DE LA COMPRA');
                    console.log(`Nombre del producto: ${producto}`)
                    console.log(`Cantidad comprada: $${totalPAgar1.toFixed(2)}`);
                    case 2:
                    console.log('DETALLE DE LA COMPRA'); 
                    console.log(`Nombre del producto: ${producto}`)
                    console.log(`Cantidad comprada: $${totalPAgar2.toFixed(2)}`);
                    case 3: 
                    console.log('DETALLE DE LA COMPRA');
                    console.log(`Nombre del producto: ${producto}`)
                    console.log(`Cantidad comprada: $${totalPAgar3.toFixed(2)}`);
                    default:
                        console.log('Opcion no valida');
                }
            });

        });
    });
});