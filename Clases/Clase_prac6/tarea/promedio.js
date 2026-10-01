import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Cuantas calificaciones desea ingresar?: ', (cantidad) => {
    let totalNotas = parseInt(cantidad);
    let suma = 0;
    let notaMaxima = 0;
    let notaMinima = 10;

    rl.question('Ingrese la calificacion #1: ', (nota1) => {
        let n1 = parseFloat(nota1);
        suma = suma + n1;
        notaMaxima = n1;
        notaMinima = n1;

        if (totalNotas == 1) {
            let promedio = suma / totalNotas;
            console.log('RESUMEN DE CALIFICACIONES');
            console.log('Cantidad de calificaciones: ' + totalNotas);
            console.log('Suma total: ' + suma);
            console.log('Promedio general: ' + promedio);
            console.log('Calificacion mas alta: ' + notaMaxima);
            console.log('Calificacion mas baja: ' + notaMinima);
            rl.close();
        } else {
            rl.question('Ingrese la calificacion #2: ', (nota2) => {
                let n2 = parseFloat(nota2);
                suma = suma + n2;

                if (n2 > notaMaxima) {
                    notaMaxima = n2;
                }
                if (n2 < notaMinima) {
                    notaMinima = n2;
                }

                if (totalNotas == 2) {
                    let promedio = suma / totalNotas;
                    console.log('RESUMEN DE CALIFICACIONES');
                    console.log('Cantidad de calificaciones: ' + totalNotas);
                    console.log('Suma total: ' + suma);
                    console.log('Promedio general: ' + promedio);
                    console.log('Calificacion mas alta: ' + notaMaxima);
                    console.log('Calificacion mas baja: ' + notaMinima);
                    rl.close();
                } else {
                    rl.question('Ingrese la calificacion #3: ', (nota3) => {
                        let n3 = parseFloat(nota3);
                        suma = suma + n3;

                        if (n3 > notaMaxima) {
                            notaMaxima = n3;
                        }
                        if (n3 < notaMinima) {
                            notaMinima = n3;
                        }

                        let promedio = suma / totalNotas;
                        console.log('RESUMEN DE CALIFICACIONES');
                        console.log('Cantidad de calificaciones: ' + totalNotas);
                        console.log('Suma total: ' + suma);
                        console.log('Promedio general: ' + promedio);
                        console.log('Calificacion mas alta: ' + notaMaxima);
                        console.log('Calificacion mas baja: ' + notaMinima);
                        rl.close();
                    });
                }
            });
        }
    });
});