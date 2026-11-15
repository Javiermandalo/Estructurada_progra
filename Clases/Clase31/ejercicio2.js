import readline from "node:readline";

const eje2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pacientes = [];

const registrarPacientes = (actual, cantidad) => {
    // Caso base
    if (actual > cantidad) {
        eje2.question(`Ingrese el nombre del paciente prioritario: `, (prioritario) => {
            pacientes.unshift(prioritario);

            console.log(`\n**Orden de atencion**`);
            for (let i = 0; i < pacientes.length; i++) {
                console.log(`Turno ${i + 1}: ${pacientes[i]}`);
            }
            eje2.close();
        });
        
        // ¡ERROR CORREGIDO! Se necesita este return para que no siga ejecutando el código de abajo
        return; 
    }

    eje2.question(`Ingrese el nombre del paciente ${actual}: `, (nombre) => {
        pacientes.push(nombre);
        // Recursividad
        registrarPacientes(actual + 1, cantidad);
    });
};

eje2.question(`Cuantos pacientes desea registrar? `, (cantidad) => {
    const total = Number(cantidad);

    // Validación básica recomendada
    if (!Number.isInteger(total) || total <= 0) {
        console.log("Por favor, ingrese un número mayor a cero.");
        eje2.close();
        return;
    }

    // ¡ERROR CORREGIDO! Ahora sí llamamos a la función para iniciar el proceso
    registrarPacientes(1, total);
});