/*
- function
- return?
- parâmetro defoult
- statement vs expression
- pure functions
- Mais? - funções por parâmetro; Array funcions; - Hight Order 
 */
const fazerPao = function(quantidade) {
    return '🍞'.repeat(quantidade).split(' ');
}

const imprimir = function(lista) {
    console.log('--------LISTA---------');
    console.log(lista.join(' '));
    console.log('----------------------');
}
let listaUm = fazerPao(6);
imprimir(listaUm);

//- pure functions
let x = 0;

const impure = (abc) => {
    abc++
    return x ** 2
}
const impure2 = (valor) => {
    valor--
    return x ** 2;
}
x = impure(12);
x = 20;
a = impure2();
console.log(a);