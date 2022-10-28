//videoAula
let obj = {
    nome: 'Rawston',
    anoNascimento: 1975,
    idade: function() {
        return new Date().getFullYear() - this.anoNascimento
    }
}

console.log(obj);
console.log(typeof obj);

console.log(obj.idade());