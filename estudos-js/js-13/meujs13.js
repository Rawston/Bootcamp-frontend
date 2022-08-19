let myString = "Rawston";


// A tentativa de atribuir um valor à propriedade .length
// de uma string não tem efeito observável.

myString.length = 5;
console.log(myString);
// retorna  "Rawston"
console.log(myString.length);
// retorna 7