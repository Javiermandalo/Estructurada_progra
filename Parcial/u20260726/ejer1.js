import readline from 'node:readline';

const centerTech = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

centerTech.question("Ingrese el nombre del estudiante: ", function(estudiante_name){
    centerTech.question("Ingresar el nombre equipo: ", function(name_equipo){
        centerTech.question("Ingrese las horas solicitadas: ", function(horas_solicitadas){

            let fecha = new Date();
            let hora = fecha.getHours();
            let fecha_hoy = fecha.toLocaleDateString();
            const precio_hora = 2.25;
            let horascosto = horas_solicitadas * precio_hora;
            horascosto = horascosto.toFixed(2);

            //converción 
            horas_solicitadas = parseInt(horas_solicitadas);
            estudiante_name = estudiante_name.toLocaleUpperCase();
            name_equipo = name_equipo.toLocaleUpperCase();

            console.log(`Nombre estudiante: ${estudiante_name}`)
            console.log(`Nombre equipo: ${name_equipo}`);
            console.log(`Fecha: ${fecha_hoy}`);
            console.log(`Hora: ${hora}`);

            if (hora < 12 ) {
                console.log("Prestamo registrado en jornada matutina");
            } else {
                console.log("Prestamo registrado en jornada vespertina")
            } 
            console.log("-----------------------------------------------")
            console.log(`Costo: ${horascosto}`);
            centerTech.close();
        });
    });
});
