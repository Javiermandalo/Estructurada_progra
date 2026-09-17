import readline from 'node:readline';

const ejer2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ejer2.question('Ingrese su nivel de estudios (1 al 5): ', function(nivel){
    let n = parseInt(nivel);
    let estudios = "";

    switch (n) {
        case 1:
            estudios = "Primaria";
            break;
        case 2:
            estudios = "Secundaria";
            break;
        case 3:
            estudios = "Bachillerato";
            break;
        case 4:
            estudios = "Universidad";
            break;
        case 5:
            estudios = "Postgrado";
            break;
        default:
            estudios = "Nivel no válido";
            break;
    }

    console.log(estudios);
    ejer2.close();
});