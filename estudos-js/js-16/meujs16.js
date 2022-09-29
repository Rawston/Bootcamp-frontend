/* 
- LÓGICA BOOLEANA
- (5 > 6) .....== false
- ('R' == 'r') == false
- []..............true
- 0 ...........== false
- ''...........== false
- 'texto'......== true
- not false....== true
- not true.....== false
 
*/

//console.log('if, else')
let valor = false

if (valor == true) {
    console.log("O valor é: verdadeiro")
} else {
    console.log("O valor é: falso")
}

let valor1 = true

if (valor1 == true) {
    console.log("O valor1 é: verdadeiro")
} else {
    console.log("O valor1 é: falso")
}

let valor2 = 10

if (valor2) {
    console.log("O valor2 é: verdadeiro")
} else {
    console.log("O valor2 é: falso")
}

let idade = 18

if (idade == 18) {
    console.log("Tem 18 anos!!!")
} else {
    console.log("Não tem 18 anos!!!")
}

let idade1 = 100

if (idade1 == 18) {
    console.log("Tem 18 anos!!!")
} else if (idade1 >= 70) {
    console.log("Tem 70 anos ou mais!!!!")
} else if (idade1 >= 60) {
    console.log("Tem 60 anos ou mais!!")
} else {
    console.log("Não tem 18 anos")
}

let idade2 = 60
let desconto = 0

if (idade2 == 18) {
    console.log("Tem 18 anos!!!")
    desconto = 0.10
} else if (idade2 >= 70) {
    console.log("Tem 70 anos ou mais!!!!")
    desconto = 0.20
} else if (idade2 >= 60) {
    console.log("Tem 60 anos ou mais!!")
    desconto = 0.15
} else {
    console.log("Não tem 18 anos")
    desconto = 0.05
}

console.log("desconto: ", desconto)

let idade3 = 26

if (idade3 >= 25) {
    console.log("idade3 é: >=25")

    if (idade3 <= 50) {
        console.log("Idade3 é: >= 25 e idade3 é: <= 50")
    }
}

/* idade3 de forma simplificada */
let idade4 = 30
let desconto1 = 0

if (idade4 >= 25 && idade4 <= 50) {
    console.log("idade4 é: >=25")
    console.log("Idade4 é: >= 25 e idade3 é: <= 50")
    desconto1 = 0.50
}
console.log("desconto1: ", desconto1)
console.log("FIM!!")