import readline from "node:readline"

const uno=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const registrarNota=(actual,cantidad,total)=>{

    if(actual > cantidad){
        const promedio=total/cantidad

        console.log(`Cantidad de evaluaciones: ${cantidad}`)
        console.log(`Promedio: ${promedio.toFixed(2)}`)

        if(promedio >= 6){
            console.log(`El estudiante aprobo`)
        }else{
            console.log(`El estudiante reprobo`)
        }

        uno.close()
        return
    }

    uno.question(`Ingrese la calificacion ${actual}: `,(dato)=>{

        const nota=parseFloat(dato)

        if(!Number.isFinite(nota) || nota<0 || nota>10){
            console.log(`Ingrese una calificacion valida entre 0 y 10`)
            registrarNota(actual,cantidad,total)
            return
        }

        const nuevoTotal=total+nota

        console.log(`Total acumulado: ${nuevoTotal.toFixed(2)}`)

        registrarNota(actual+1,cantidad,nuevoTotal)
    })
}

uno.question("Cantidad de evaluaciones: ",(dato)=>{

    const cantidad=parseInt(dato)

    if(Number.isInteger(cantidad) && cantidad>0){

        registrarNota(1,cantidad,0)

    }else{
        console.log(`Ingrese una cantidad valida.`)
        uno.close()
    }
})