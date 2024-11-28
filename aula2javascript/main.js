console.log("Samuel")
console.error("Erro")
console.warn("Atenção!")
//console.clear();
const nome_pessoa = "Samuel";
console.log(nome_pessoa);
const idade1 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof nome_pessoa);

// Concatenar strings
console.clear();
const pessoa = 'Vini';
const idade2 = 16;
console.log('Meu nome é ' + pessoa + ' e eu tenho ' + idade2 + ' anos!');

// Template String
const hello = Meu nome é ${ pessoa } e eu tenho ${ idade2 } anos!;
console.log(hello);

// Operadores de comparação e lógico
console.clear();
let teste1 = 1;
let teste2 = 0;
let valor1 = true;
let valor2 = false;
console.log(teste1 > teste2); // Operador de comparação
console.log(teste1 < teste2); // Operador de comparação
console.log(teste1 && teste2); // Operador lógico
console.log(valor1 && valor2); // Operador lógico
// Métodos de strings
console.clear();
const string01 = 'Instituto da Oportunidade Social';
// Acessando o primeiro caractere
console.log(string01.charAt(0));
console.log(string01[0]);
// Acessando o décimo primeiro caractere
console.log(string01.charAt(10));
console.log(string01[10]);
// Tamanho de strings
console.clear();
let texto = 'abcdefehijklmnopqrstuvxwyz';
console.log(texto.length);
console.clear();
const s = "Hello World";
console.log(s.toUpperCase());
console.log(s.toLowerCase());
const str = 'Mozilla';
console.log(str.substring(1, 3));
// Saída esperada: "oz"
console.log(str.substring(2));
// Saída esperada: "zilla"
// Substring e spit
console.clear();
const str = 'Mozilla';
console.log(str.substring(1, 3));
console.log(str.substring(2));
const str1 = 'A raposa é um animal esperto';
const palavras = str1.split(' ');
console.log(palavras[3]);
// Saída esperada: "um"
const chars = str1.split('');
console.log(chars[7]);
// Saída esperada: "a"
const strCopy = str1.split();
console.log(strCopy);
// Saída esperada: Array ["A raposa é um animal esperto"]
