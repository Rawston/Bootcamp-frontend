/* 
for
for in
for of
forEach
*/

let listaUm = [9, 22, 54, 14, 21, 08, 59, 01, 40, 36, 47, 27, 84]

let listaDois = ['erro', 'eleva', 'duque', 'damas', 'dados', 'creme',
    'cofre', 'acode', 'acima', 'achou', 'aches', 'achem'
]

/* var indice = 0;
while (indice < listaUm.length) {
    console.log('  ==>', indice, listaUm[indice])
    indice = indice + 1;
} */
//ou
/* var indice = 0;
while (indice < listaUm.length) {
    console.log('  ==>', indice, listaUm[indice])
    if (indice == 9) {
        indice = 1000;
    }
    indice = indice + 1;
} */

//do while
var indice = 0;
do {
    if (indice == 0) {
        indice = 1000
    }

} while (indice < listaUm.length)
console.log('  ==>', indice, listaUm[indice])
indice = indice + 1;

console.log('FIM')