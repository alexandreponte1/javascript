const texto1 = "Olá mundo"
const texto2 = 'Olá Mundo'
const senha = "SenhaSupersegura456!"
const StringDeNumeros = "34567"

const citacao = 'O Léo disse "OI!" ';
const citacao2 = "O Léo disse 'OI!'";
//console.log(citacao2)

// concatenação (+)
const citacao3 = "meu nome é "
const meuNome = "Alexandre"
console.log(citacao3 + meuNome)





const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


//comparação

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false


const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

const inputMinusculo = input1.toLowerCase();

console.log(cidade1 === inputMinusculo); // true

const senha1 = "minhaSenha123"
console.log(senha1.length) // 13 caracteres

//template string OU template literal
