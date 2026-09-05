import readline from 'node:readline';

const estudiante = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

estudiante.question("Ingrese su nombre", function(nombre){
    estudiante.question("Ingrese su apellido", function(apellido){
        estudiante.question("Ingrese su año de ingreso", function(ingresoA){
            estudiante.question("Ingrese su promedo", function(promedio){

                nombre = nombre.toUpperCase();
                apellido = apellido.toUpperCase();
                let Reapellido = apellido.slice(0, 3);
                let ReingreAgge = ingresoA.slice(2);
                promedio = Number(promedio);
                
                console.log(`${nombre} ${Reapellido} su año de ingreso es ${ReingreAgge} con un promedio de ${promedio.toFixed(2)}`);
                estudiante.close();
            
            
            });
        });
    });
});