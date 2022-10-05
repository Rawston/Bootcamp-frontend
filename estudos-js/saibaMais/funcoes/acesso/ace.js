/* Acesso de personagem 
Última atualização em agosto de 2022
Você pode acessar um caractere específico em uma string usando a sintaxe de colchetes [].

Você deve fornecer o índice do caractere que deseja acessar, começando em 0.

Vamos dar um exemplo onde a variável languagetem o valor: "JavaScript". Veja como você acessa o 1º caractere, o 2º e o 3º: */


const language = "JavaScript";

language[0]; //first character
language[1]; //second character
language[2]; //third character

/* Se você quiser depurar seu código e ver o resultado language[1]no console, você deve registrá-lo no console da seguinte forma: */


console.log(language[1]);

/* Combinando com comprimento
Você também pode combinar o acesso de caractere com a propriedade .length . Então, usando a mesma languagevariável, veja como você obtém o penúltimo caractere dela: */


const langua = "JavaScript";

language[langua.length - 2]; // "p" because it's the second to last character from "JavaScript"

/* Observe que language[ language.length ]será undefinedporque o acesso ao caractere começa em 0.
Portanto, para uma string de 9 caracteres, 8 é a posição do último caractere. */

/* O .at(index)método
Desde 2022, o JavaScript agora possui um .at()método que lê o caractere em um determinado índice, que também pode ser negativo.

Vejamos alguns exemplos: */

const languag = "JavaScript";
languag.at(0); // "J"
languag.at(1); // "a"
languag.at(-1); // "t"
languag.at(-2); // "p"

/* O principal caso de uso do .at()método são os índices negativos, tornando-o mais fácil do que confiar na .lengthpropriedade. No entanto, você pode usar a abordagem que preferir.

Quando um índice negativo é especificado, você começa a contar a partir do final. -1é o último caractere, -2é o anterior, etc.

Você pode continuar usando a sintaxe de colchetes para todos os outros casos de uso, sabendo que language[-1]retorna undefined. Então, sempre que você quiser usar um índice negativo, você deve usar o .at()método.

JSDocName
Até agora, você provavelmente notou que a maioria dos desafios começa com alguns comentários que se parecem com isso: */


/*  * @param {string} name

Esses comentários são usados ​​para melhorar sua experiência de codificação. Eles permitem que o editor de código saiba quais métodos sugerir a você enquanto você digita. Então você pode ignorar esses comentários. Você nunca terá que alterá-los ou adicioná-los, e eles não afetam os testes.

O que é o "uso da amostra"?
Você também deve ter notado que todo desafio tem algum código de uso de amostra no final. Por exemplo, para a função getCharCount, temos: */

// Sample usage - do not modify
console.log(getCharCount("Sam")); // 3
console.log(getCharCount("Alex 123")); // 8
console.log(getCharCount("Charley is here")); // 15

/* O objetivo do uso de exemplo é mostrar as várias maneiras pelas quais esperamos chamar a função. Às vezes, mostramos a saída esperada ao lado dela em um comentário.

Observe que nos testes acabamos chamando sua função com mais exemplos não visíveis no código de exemplo. O objetivo disso é certificar-se de que você forneceu uma resposta correta que funcione em vários cenários, não apenas em um ou dois cenários.

Recapitular
Os colchetes [index]são usados ​​para acessar um índice específico de uma string.
O índice começa em 0. Portanto, o primeiro caractere é o índice 0.
Você pode combiná-lo com o comprimento de uma string para obter outro caractere em outra posição.
O .at()método permite ler um caractere em um índice (que também pode ser negativo). */