Number.prototype.entre = function (inicio, fim){
    return this >=inicio && this <=fim
}
const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log("excelente")
    } else if (nota.entre (7, 8.99)){
        console.log("Aprovado")
    } else if (nota.entre(5, 6.99)){
        console.log("Recuperacao")
    } else if (nota.entre(0, 4.99)){
        console.log("Reprovado")
    } else {
        console.log("invalido")
    }
}
imprimirResultado(8.99)
imprimirResultado(6.5)
imprimirResultado(-1)
imprimirResultado(3.8)
imprimirResultado(10)
imprimirResultado(5.4)
imprimirResultado(7.98)
