/*
Método do tipo String
.toLowerCase()
.toUpperCase()
.trim()
.at(1) ou .charCodeAt()
.codePointAt(1)
.concat("Outras String")
.includes("Pesquisas")
.startswith("J")
.endsWith("t)
.indexof("S)
.search("S") // podemos usar regex 
*/
//console.log('javaScript'.toUpperCase());
//console.log('javaScript'.toLowerCase());
let myString = "Rawston";


// A tentativa de atribuir um valor à propriedade .length
// de uma string não tem efeito observável.

myString.length = 5;
console.log(myString);
// retorna  "Rawston"
console.log(myString.length);
// retorna 7