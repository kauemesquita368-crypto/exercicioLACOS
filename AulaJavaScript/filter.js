//Filter

//calback
/*array.metodo((element, index, array) => {


});

*/

//forEach
/*const frutas = ["Maça", "Banana", "Uva"];

frutas.forEach ((element, index) => {
    console.log(index, element);
});

for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas.length; i++)
    console.log(i,frutas[i])
}*/

//forEach
/*const alunos = ["Lucas", "Maria", "João"];

alunos.forEach((nome, index) => {
     console.log(`${index + 1} aluno: ${nome}`)
});
*/

/*const people = [
    {name: "Lucas", age: 35},
    {name: "Maria", age: 17},
    {name: "João", age: 18},
    {name: "Ana", age: 22},
];
*/


/*const novoArray = array.filter((element)=> {
    return condicao;
}); 

const maiores = people.filter((person) => {
    return person.age >= 18;
});
console.log(maiores)
*/

/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const numerosPares = numeros.filter((numero) => {
   return numero % 2 === 0;
});

console.log(numerosPares)
*/

//Crie um array com vários números
//Use filter para mostrar apenas os números maiores que 50

/*const numeros = [10, 55, 80, 2, 100];

const maiores = numeros.filter((numero) => {
    return numero > 50;
});

console.log(maiores);
*/

//Map
/*const novoArray = array.map((element) => {
    return novoValor
});*/

/*const nomes = people.map((person) => {
    return person.name.toUpperCase();


});console.log(nomes);
*/

/*const numeros = [1, 2 , 3, 4 ,5];

const dobro = numeros.map((numero) => {
    return numero * 2;
});

console.log(dobro);
*/

/*const produtos = ["Mouse", "Teclado", "Monitor"];

const frases = produtos.map((produto) => {
return `Produtos: ${produto}`
});
console.log(frases)

*/

// Map

/*const pessoas = [
    {nome: "Lucas", idade: 35},
    {nome: "Maria", idade: 17},
    {nome: "Joao", idade: 18},
    {name: "Ana", idade: 22},
];

const resultado = pessoas.map((pessoa) => {
    return {
         nome: pessoa.nome,
         maiorIdade: pessoa.idade >= 18
    };
});

console.log(resultado);
*/

//Use map para transformar um array de preços com desconto de 10%

/*const precos = [100, 200, 300];
const precoDesconto = precos.map ((preco) => {

    return preco * 0.9;

})
console.log(precoDesconto)
*/

//Use map para transformar:[1,2,3,4] em ["Numero 1", "Numero 2..."]

/*const = numeros. [1,2,3,4];
const resultado = numeros.map((numero) => {
    return `Numero: ${numero}`;
})
console.log(resultado);
*/


//Find
/*const item = array.find((element) => {
    return condicao;
})*/

/*const people = [

 {name: "Lucas", idade: 35},
    {name: "Maria", age: 17},
    {name: "Joao", age: 18},
    {name: "Ana", age: 22},
];
//Find
const maria = people.find((person) => {
    return person.name === "Carlos";
});
console.log(maria)
*/

//Encontrar número
/*const numeros = [5,10,15,20,25];

const maior = numeros.find((numeros) => {
    return numeros >= 18
});

console.log(maior);
*/

//Find
/*const usuarios = [
    {id:1, nome: "Lucas"},
    {id:2, nome: "Marcia"},
    {id:3, nome:"Joao"},

    ];
    const usuario = usuarios.find((u) => {
        return u.id === 2;
    });
   console.log(usuario);
*/

//Find 
//Encontre o primeiro número negativo do array.
/*const numeros = [5,8,-2,10,-7];
const negativo = numeros.find((numero) => {
    return numero < 0;
});

//Reduce
/*array.reduce((acc, element) => {
return novoACC
}, valorInicial);

*/

//Reduce
/*const numeros = [10,20,30];

const soma = numeros.reduce((acc, numero) => {
     console.log("ACC:", acc)
     console.log("Número atual:", numero);
     return acc + numero;
}, 0);
console.log(soma);
*/

//Reduce

/*const people =  [
    {name: "Lucas", age: 35},
    {name: "Maria", age: 17},
    {name: "Joao", age: 18},
    {name: "Ana", age: 22},
];

/*const totalIdade = people.reduce((acc,person) => {
    return acc + person.age;
},0);
console.log(totalIdade)


const nomes = people.reduce((acc, person) => {
return acc + " " + person.name;
}, "");
console.log(nomes);
*/

//Multiplicar números
/*const numeros = [2,3,4]

const numero =numeros.reduce((acc,numero1) => {
    return acc* numero1;
},1)

console.log(numero)
*/

//Somar preços de produto
/*const carrinho = [
    {produto:"Mouse", preço:50},
    {produto:"Teclado", preço:100},
    {produto:"Monitor", preço:900},
];

const numero =carrinho.reduce((acc,numero) => {
    return acc + numero.preço;
},0)
console.log(numero)
*/

//Contar quantidade de letras
const palavras = ["oi", "javascript", "html"];

const totalLetras =palavras.reduce((acc, palavra) => {
    return acc + palavra.length;
},0)

console.log(totalLetras)