/**
 * qual a difrença entre var, let e const? 
 */

let pessoa = 'José Pedro'
let anoNascimento = 1975
let anoAtual = 2025

let idade = anoAtual - anoNascimento
let resultado = `A idade de ${pessoa} no ano de ${anoAtual} é ${idade}!`

console.log(resultado)

// O que acontece se fizermos uma nova atribuição?
/* Resp. usando let no lugar de var, me dá erro no casa de usar o mesmo nome da variável.
 */
let novoAno = anoAtual + 5
let idade2 = novoAno - anoNascimento
let resultado2 = `A idade em ${novoAno} será ${idade2} ao invés de ${idade}`

console.log(resultado2)