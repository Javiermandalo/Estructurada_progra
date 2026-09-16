import readline from 'node:readline';

const ejer1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Converción de medidas');
console.log('1. Metros a centimetros');
console.log('2. Kilometros a metros');
console.log('3. Horas a minutos');
console.log('4. Dias a horas');

ejer1.question('Ingrese una opcion del menu (1,2,3, o 4)', function(opcion){

    ejer1.question('Ingrese la cantidad a convertir: ', function(cantidad){

        cantidad = parseFloat(cantidad);
        let resultado;
        
        switch(opcion) {
            case "1":
            resultado = cantidad * 100; 
            console.log(`Resultado : ${resultado}cm`);
            break;
            case "2":
            resultado = cantidad * 1000; 
            console.log(`Resultado : ${resultado}km`);
            break;
            case "3":
            resultado = cantidad * 60; 
            console.log(`Resultado : ${resultado} minutos`);
            break;
            case "4":
            resultado = cantidad * 24; 
            console.log(`Resultado : ${resultado} horas`);
            break;
            default:
                console.log(`Opcion no valida`);
        }
        ejer1.close();
    });
});
