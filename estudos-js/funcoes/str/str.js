/* "BLUE".toLowerCase(); // "blue";
    "red".toUpperCase(); // "RED";
 */
/* "Nice!".length;
 //5
 let text = "Hello World";
text.length; 
// 11


 */

function sum(a, b) {
    console.log(a);
    console.log(a + b);
    return a + b;
}

// Uso de amostra
sum(1, 3);

/* teste */

/**
 * @param {string} str
 */
function getCharCount(str) {
    return str.length;
}


// Uso de amostra - não modifique
console.log(getCharCount("Sam")); // 3
console.log(getCharCount("Alex 123")); // 8
console.log(getCharCount("Charley is here")); // 15
console.log(getCharCount("Rawston")); // 7

/**
 * @param {string} name
 */
function shoutMyName(name) {
    return name.toUpperCase();
}

// Uso de amostra - não modifique
console.log(shoutMyName("Sam")); // "SAM"
console.log(shoutMyName("Charley")); // "CHARLEY"
console.log(shoutMyName("alex")); // "ALEX"
console.log(shoutMyName("Rawston")); // "RAWSTON"

function meunome(name) {
    return name.toLowerCase();
}

// Uso de amostra - não modifique
console.log(meunome("Rawston")); // "rawston"