// Classes
class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
// Intanciando objetos à classe
let meuCarro1 = new Carro('Ford', 2014);
let meuCarro2 = new Carro('Audi', 2019);
//Imprimindo valores
console.log(meuCarro1.nome);
console.log(meuCarro1.ano);
console.log(meuCarro2.nome);
console.log(meuCarro2.ano);
// Declarar nova classe com métodos
console.clear();
class NovoCarro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    idadeCarro(ano) {
        return ano - this.ano;
    }
}
//Buscando o ano atual automaticamente
let dataHoje = new Date();
let ano = dataHoje.getFullYear();
// console.log(dataHoje);
// Intanciando o objeto à classe
let meuNovoCarro = new NovoCarro('Ford', 2014);
console.log(meuNovoCarro.idadeCarro(ano));
// Lexical this em uma função
console.clear();
// Constructor de função - lexical this
function PessoaFunc(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    };
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}
// Instanciando os objetos
const pessoa3 = new PessoaFunc('John', 'Doe', '1980-04-03');
const pessoa4 = new PessoaFunc('Marry', 'Smith', '1970-06-13');
console.log(pessoa3);
console.log(pessoa4.dob.getFullYear());