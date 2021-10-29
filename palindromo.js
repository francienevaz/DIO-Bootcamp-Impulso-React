//solução 1

function verificarPalindromo (string) {
if(!string) return "string inexistente";

 return string.split("").reverse().join("") === string;

}

console.log(verificarPalindromo(""))

//solução 2

function verificarPalindromo2 (string) {
    if(!string) return "inexistente";
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }

    }
    return true;
}

console.log(verificarPalindromo2('abba'))


function substituiPares (array) {
    if (!array) return -1;
    if (!array.length) return -1;
    for (let i = 0; i < array.length ; i++){
        if(array[i] === 0) {
            console.log('Você já é zero')
        } else if ( array[i] % 2 === 0) {
            console.log (`Substituindo ${array[i]} por 0...`);
            array[i] = 0
        }
    }
    return array;
}

let arr = [1,2,4,5,7,8,9,41,74,29,54,36,74,91,100]
console.log (substituiPares(arr))

