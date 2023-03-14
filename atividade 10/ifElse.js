const imprimirResultado = function(nota){
    if(nota >= 8 ){
        console.log("Aprovado!")
    } else {
        console.log("Reprovado!")
    }
}
imprimirResultado(9)
imprimirResultado(7.9)
imprimirResultado("Epa!!")//cuidado, pois como js é uma lingua tipada esse erro pode acabar passando
