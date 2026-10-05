import readline from 'node:readline';

const producción_diaria = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

producción_diaria.question("Nombre del empleado: ", function(name_empleado){
    producción_diaria.question("Cantidad de productos elaborados: ", function(productos_elaborados){
        producción_diaria.question("Cantidad de productos defectuosos: ", function(productos_defectuosos){

            let product_correctos = productos_elaborados - productos_defectuosos;
            let porcen_correctos = (product_correctos / productos_elaborados) * 100;

            porcen_correctos = porcen_correctos.toFixed(2);
            name_empleado = name_empleado.toLocaleUpperCase();
            productos_elaborados = parseFloat(productos_elaborados);
            productos_defectuosos = parseFloat(productos_defectuosos);

            console.log(`Nombre empleado: ${name_empleado}`);
            console.log(`Productos correctos: ${product_correctos}`);
            console.log(`Porcentaje correctos: ${porcen_correctos}%`);
            console.log(`--------------------------------------------------`);
            if (porcen_correctos >= 95) {
                console.log(`Estado: Producción aceptada`);
            } else {
                console.log(`Estado: Producción requiere revisión`);
            }
            producción_diaria.close();
        });
    });
});