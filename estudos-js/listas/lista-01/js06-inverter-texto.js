/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 */

// Entrada
var entrada = 'abacate';
//var entrada = '12345';

// gere a variável invertido de forma a transforma a entrada na saída esperada
var invertido = entrada.split("").reverse().join("");

console.log(invertido) //Resolvido