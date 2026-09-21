import readline from "node:readline"

const uno=readline.createInterface({

    input:process.stdin,
    output:process.stdout
})

uno.question("Ingrese la cantidad de veces que quiere que imprima su nombre : ",(veces)=>{
    veces=parseInt(veces)
    uno.question("Ingrese su nombre : ",(name)=>{
        for(let i=0; i<=veces;i++){

            console.log(`${i}.${name}`)
            uno.close()
    };
    });   
});