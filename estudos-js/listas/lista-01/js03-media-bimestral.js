/**
 * Faça um Programa que calcule a média das notas bimestrais.
 * 
 * ENTRADA                           SAÍDA
 *    10, 8, 9.5, 7, 10              8.9
 *    8, 8, 8                        8.0
 *    7, 5, 5.5, 6, 5                5.7
 * 
 * Tarefa:
 * - Crie um loop para percorrer todas as notas e armazene na variável total
 * - Veja como pegar a quantidade notas através do tamanho da lista
 * - Use a variável media para fazer o cálculo total / quantidade de notas
 * - Use o comando abaixo para testar seu programa
 * 
 *   $ node lista-01/js03-media-bimestral.js
 *   👉 a média das 5 notas do bimestre é 8.9
 * 
 *  - Teste para mais dados de entrada diferentes e verifique que o cálculo está correto
 *  - Veja como é feito para mostrar sempre 1 casa decimal
 *  - O que aconteceria se não tivesse o .toFixed com a entrada [7, 5, 5.5, 6, 5.1]
 * 
 *  DICA:
 *   - Veja o vídeo seguinte de repetições para conseguir percorrer todas as notas
 *  EXTRA:
 *  - Como fazer para Mostrar APROVADO/REPROVADO no final (p/nota de corte = 7)
 */
/* var nota1 = 10,
    nota2 = 8,
    nota3 = 9.5,
    nota4 = 7,
    nota5 = 10,
    media = 0;

media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

media = media.toFixed(2);

console.log('Media = ' + media); */

// Entrada
var notas = [10, 8, 9.5, 7, 10]
    //Crie um loop para percorrer todas as notas e armazene na variável total
console.log('==> Loop percorrer');
notas.forEach(function(item) {
    console.log(item);
})


//Veja como pegar a quantidade notas através do tamanho da lista
console.log('==> Quantidade de notas');
console.log(notas.length);


// Altere a expressão abaixo para calcular a média a partir do total de notas
var media, quantidadeDeNotas
var total = 44.5;

// Faça um loop para achar o total de notas
console.log('==> Total de notas');
var soma = notas.reduce(function(soma, i) {
    return soma + i;
});
console.log(soma);


// Veja como pegar este valor com base na entrada
quantidadeDeNotas = 5
media = 0 // ?


var resultado = '👉 a média das ' + quantidadeDeNotas + ' notas do bimestre é ' + media.toFixed(2)

//console.log(resultado)


//minha resolução
var notas =
    n1 = 10,
    n2 = 8,
    n3 = 9.5,
    n4 = 7,
    n5 = 10,
    media = 0
media = (n1 + n2 + n3 + n4 + n5) / 5;
media = media.toFixed(2);

console.log('A Media é: = ' + media);

/* function soma(n1, n2, n3, n4, n5) {
    let soma = (n1 + n2 + n3 + n4 + n5) / 5;
    return soma
}

let resultado = soma(10, 8, 9.5, 7, 10)

console.log(resultado); */