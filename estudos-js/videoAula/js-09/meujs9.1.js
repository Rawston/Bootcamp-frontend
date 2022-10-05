/**
 * qual a difrença entre var, let e const? 
 */

let lista = [1, 2, 3, 4, 5]
let soma = 0

const PALAVRA = "ABC" // não muda em nenhum momento

for (let item in lista) {
    soma = soma + lista[item]
    let texto = `soma atual: ${soma}`
    console.log(texto)
    console.log('item --> ', item)
    console.log('texto --> ', texto)
}

// O que acontece se fizermos uma nova atribuição?
/* Resp. usando let no lugar de var, imprime o que eta dentro do escopro
separado do que esta fora.
 */

console.log('lista --> ', lista)
console.log('soma --> ', soma)

console.log('PALAVRA --> ', PALAVRA)