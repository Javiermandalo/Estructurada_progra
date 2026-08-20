import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    rl.question('Ingrese el nombre del estudiante: ', (nombre) => {
        rl.question('Ingrese el apellido del estudiante: ', (apellido) => {
            rl.question('Ingrese el año de ingreso (ej. 2026): ', (anio) => {
                rl.question('Ingrese la cuota mensual: ', (cuota) => {

                    
                    let nombreMayus = nombre.toUpperCase();
                    let apellidoMayus = apellido.toUpperCase();

                    
                    let apellidoRecorte = apellido.slice(0, 3);

                    
                    let anioTexto = anio.toString();
                    let anioRecorte = anioTexto.slice(-2);

                    
                    let cuotaDecimales = Number(cuota).toFixed(2);

                    console.log('\n--- DATOS PROCESADOS ---');
                    console.log(`Nombre completo: ${nombreMayus} ${apellidoMayus}`);
                    console.log(`Inicio del apellido: ${apellidoRecorte}`);
                    console.log(`Año abreviado: ${anioRecorte}`);
                    console.log(`Cuota mensual: $${cuotaDecimales}`);

                    rl.close();
                });
            });
        });
    });