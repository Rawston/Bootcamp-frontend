/* Operadores Lógicos (Tabela verdade) */

/* TABELA VERDADE (E &&)
------------------------
0  0  = 0
0  1  = 0 
1  0  = 0 
1  1  = 1 (***)

Tabela VERDADE (OU ||)
........................
0  0  = 0
0  1  = 1 
1  0  = 1 
1  1  = 1
*/

let idade = 18
let estudante = true

if (idade < 32 && estudante) {
    console.log("Menor que 32 e estudante!!")
} else {
    console.log("Sem desconto")
}
console.log("Resultado do primeiro exemplo")


/* Segundo Exemplo */
let idade1 = 18
let estudante1 = true

if (idade < 32 || estudante1) {
    console.log("Menor que 32 e estudante1!!")
} else {
    console.log("Sem desconto")
}
console.log("Resultado do segundo exemplo")