import readline from 'node:readline';

const museo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

museo.question(`Cuantos visitantes llegaran?: `, function(cant_visitantes){
    let personas = parseFloat(cant_visitantes);
    let entradasGratuitas = 0;

    for (i = 1; i <= personas; i++) {
        if (i % 5 == 0) {
            console.log(`Visitantes con entrada gratuita: ${i}`);
            entradasGratuitas++
        } 
    }
    console.log(`Se otorgaran ${entradasGratuitas} entradas gratuitas.`)
    museo.close();
});