import readline from "node:readline";

const eje1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pedidos = []; 

const registrarPedidos = (actual, cantidad) => {
    
    // Caso base
    if (actual > cantidad) {
        console.log(`\n**Cancelacion del último pedido**`);
        let cancelado = pedidos.pop();
        
        console.log(`Pedido cancelado: ${cancelado}`);
        console.log(`Pedidos Restantes:`);

        for (let i = 0; i < pedidos.length; i++) {
            console.log(`Pedido ${i + 1}: ${pedidos[i]}`);
        }
        
        // ¡FALTABA ESTO! Cerrar la interfaz y retornar para detener la recursividad
        eje1.close();
        return; 
    }

    eje1.question(`Ingrese el codigo del pedido ${actual}: `, (codigo) => {
        pedidos.push(codigo);
        // Recursividad 
        registrarPedidos(actual + 1, cantidad);
    });
};

eje1.question("Cuantos pedidos registrar?: ", (cantidad) => {
    const total = Number(cantidad);
    
    if (!Number.isInteger(total) || total <= 0) {
        console.log("Ingrese una cantidad entera y mayor que cero");
        eje1.close();
        return;
    }

    // ¡CORRECCIÓN! La función se debe llamar aquí adentro, 
    // después de que el usuario ingresó la cantidad y fue validada.
    registrarPedidos(1, total); 
});
// (Se eliminó la llamada a registrarPedidos de aquí afuera)