

import realine from 'node:readline';

const colorfav = realine.createInterface({
    input: process.stdin,
    output: process.stdout
});

colorfav.question("Cual es tu color favorito?", function(color){
    console.log(`El color es ${color} muy bien!!!`)
    colorfav.close();
});

