const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10: case 9: 
            console.log("Excelente")
            break
        case 8: case 9:
            console.log("Parabens")
            break
        case 7: case 6: case 5:
            console.log("Precisa melhorar")
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log("REPROVADO!")
        default:
            console.log("Nota inválida")   
        }
    }
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(4)
imprimirResultado(2.9)
imprimirResultado(8.9)
imprimirResultado(11)
imprimirResultado(-1)
imprimirResultado(0)