function soBoaNiticia(nota){
    if (nota>= 7){
        console.log("Aprovado com " + nota)
    }
}
soBoaNiticia(8.9)
soBoaNiticia(6.9)

function seForVerdadeEuFalo(valor){
    if (valor){
        console.log("Se for verdade...")
    }
}
//falso
seForVerdadeEuFalo()
seForVerdadeEuFalo("")
seForVerdadeEuFalo({})
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
//verdade
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo([4,2])
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])