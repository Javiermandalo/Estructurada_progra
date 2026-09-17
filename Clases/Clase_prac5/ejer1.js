import readline from 'node:readline';

const ejer1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ejer1.question('Ingrese su nombre: ', function(nombre){
    ejer1.question('Ingrese su calificación: ', function(calificaciones){
        ejer1.question('Entrega todos los trabajos (si o no) ', function(respuesta){
            let calificacionp = parseFloat(calificaciones);
            let respuestal = respuesta.trim().toLocaleLowerCase();

            if (calificacionp < 0 || calificacionp > 100) {
                console.log('La calificación tiene que estar entre 0 y 100');
            } else {
                let bonificacion = 0;

                if (respuestal === "si") {
                    if (calificacionp >= 90) {
                        bonificacion = 5;
                    } else if (calificacionp >= 70) {
                        bonificacion = 3;
                    }
                }
                
                let calificacionFinal = calificacionp + bonificacion;
                if (calificacionFinal > 100) {
                    calificacionFinal = 100;
                }

                console.log('--- REPORTE DE CALIFICACIÓN ---');
                console.log(`Nombre: ${nombre}`);
                console.log(`Calificación original: ${calificacionp}`);
                console.log(`Bonificación aplicada: ${bonificacion}`);
                console.log(`Calificación final: ${calificacionFinal}`);
            }

            ejer1.close();
        });
    });
});