import readline from 'node:readline';

const universotario = readline.createInterface({
    input: process.stidin, 
    output: process.stdout
});

const PRECIO_ENTRADA = 5.00;
const PORCENTAJE_DESCUENTO = 0.15;

const cal_subtotal = (cant_entradas, precio) => {
    return cant_entradas * precio;
}

const cal_descuento = (subtotal, cantidad) => {
    if (cantidad >= 5) {
        return subtotal * PORCENTAJE_DESCUENTO;
    }
    return 0; 
};

universotario.question('Cuantas entradas desea comprar: ', (valor)=>{
    const cant_entradas = parseFloat(valor);

    
    const subtotal = cal_subtotal(cant_entradas, PRECIO_ENTRADA);
    const desceunto = cal_descuento(subtotal, cant_entradas);
    const total_pagar = subtotal - desceunto;
    
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`Descuento: $${desceunto.toFixed(2)}`);
    console.log(`Total a pagar: $${total_pagar.toFixed(2)}`);

    universotario.close();
});