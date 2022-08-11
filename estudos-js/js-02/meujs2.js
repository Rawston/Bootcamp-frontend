/**
 * PROBLEMA
 * Dado uma lista de 100 números inteiros, então
 * calcule a soma total e imprima o resultado!!
 */

var lista = [57, 72, 00, 39, 84, 28, 80, 53, 51, 59, 92, 59, 18, 52, 87,
    90, 38, 12, 91, 74, 80, 91, 16, 94, 67, 22, 01, 70, 31, 32,
    56, 24, 10, 04, 30, 79, 44, 92, 62, 02, 53, 99, 66, 45, 08,
    18, 92, 87, 35, 88, 53, 08, 58, 96, 63, 03, 58, 80, 29, 28,
    27, 07, 81, 88, 65, 05, 21, 08, 59, 01, 40, 36, 13, 27, 84,
    54, 60, 25, 28, 85, 71, 51, 63, 40, 76, 61, 02, 01, 81, 73,
    82, 55, 93, 13, 46, 89, 98, 54, 14, 21,
];

var soma = 0;

//que devo fazer?
//percorrer cada elemento da minha lista
// somar o item atual em contador

for (var item in lista) {
    soma = soma + lista[item];
}

console.log("Resultado: " + soma);