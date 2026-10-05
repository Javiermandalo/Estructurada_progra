import readline from 'node:readline';

const ESTUDIANTE = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ESTUDIANTE.question("Ingrese el nombre de estudiante: ", function(name_estudiante){
    ESTUDIANTE.question("Ingrese codigo de inscripcion (EJM. ING-2026-0845): ", function(codigo_estudiante){
        

        name_estudiante = name_estudiante.toLocaleUpperCase();
        codigo_estudiante = codigo_estudiante.toLocaleUpperCase();

        let slice_codigo = codigo_estudiante.slice(0, 3);
        let slice_codigo_year = codigo_estudiante.slice(4,9)
        let slice_codigo2 = codigo_estudiante.slice(9);
        slice_codigo_year =  parseInt(slice_codigo_year);

        console.log("================================================");
        console.log("        TICKET DE INSCRIPCIÓN");
        console.log("================================================");
        console.log(`Estudiante: ${name_estudiante}`);
        console.log(`Código: ${codigo_estudiante}`);
        console.log("--------------------------------------");
        console.log(`Carrera: ${slice_codigo}`);
        console.log(`Año: ${slice_codigo_year}`);
        console.log(`Registro: ${slice_codigo2}`);
        console.log("--------------------------------------");
        if (slice_codigo_year == 2026) {
            console.log("INSCRIPCIÓN VÁLIDA");
        }else{
            console.log("VERIFICAR AÑO DE INSCRIPCIÓN");
        }
        console.log("================================================");
        ESTUDIANTE.close();
    });
});