

import readline from 'node:readline';

const ciudad = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ciudad.question("En que ciudad vives?", function(lugar){
    console.log(`Vives en ${lugar}`);
    ciudad.close();
});