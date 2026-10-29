import  readline from "node:readline"

const uno=readline.createInterface({

    input:process.stdin,
    output:process.stdout
})



const equiposkd=(consumo,actual,total)=>{


}



uno.question("Ingrese la cantidad de equipos que desea ingresar : ", (cantidadEq)=>{

    const consumo=parseFloat(cantidadEq)

    if(Number.isFinite(consumo) && consumo >0){

        equiposkd(1,consumo,0); 

    }else{
        console.log("Ingrese un valor valido de kilowatios")
    }
})