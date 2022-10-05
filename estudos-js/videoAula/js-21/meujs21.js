/* 
for
for in
for of
forEach
*/

let listaUm = [9, 22, 54, 14, 21, 08, 59, 01, 40, 36, 13, 27, 84]

let listaDois = ['erro', 'eleva', 'duque', 'damas', 'dados', 'creme',
    'cofre', 'acode', 'acima', 'achou', 'aches', 'achem'
]

/* console.log('oi loops');

// for tradicional
for (var i = 0; i < listaUm.length; i++) {
    console.log('indice=', i);
    console.log('indice=', listaUm[i]);
} */


// for in
/* for (var indice in listaUm) {
    console.log('indice=', listaUm[indice]);
}
 */
// for of
/* for (var elemento in listaDois) {
    console.log('elemento=', listaUm[elemento]);
} */

// forEach
/* listaDois.forEach(function(item) {
    console.log(item);
}) */

/* for (var elemento of listaDois) {

    if (elemento == 'damas') {
        console.log(' Achei ==>', 'damas');
        break;
    }
    console.log(elemento)
} */

for (var elemento of listaDois) {

    if (elemento == 'damas' || elemento == "achou") {
        console.log(' ==>', 'siga');
        continue;
    }
    console.log(elemento)
}

console.log('FIM')