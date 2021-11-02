function num (n1, n2) {
    let soma = n1 + n2

   if (soma > 10 && soma < 20) {
        console.log (`A soma entre os números ${n1} e ${n2} é maior que 10 e menor que 20`)
    } else if (soma < 10) {
        console.log (`A soma entre os números ${n1} e ${n2} é menor que 10 `)
    } else if (soma > 20) {
        console.log (`A soma entre os números ${n1} e ${n2} é maior que 20`)
    }
        if (n1 === n2) {
        return console.log(`Os números ${n1} e ${n2} são iguais`)
    } else {
        return console.log(`Os números ${n1} e ${n2} são diferentes`)
    }         
} 

num(10,11)
