
/*const idade = Number(prompt("Digite sua idade"))

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é de menor")
}


const numero = Number(prompt("Digite um número"))
if (numero >= 1) {
    console.log ("Numero positivo")
} else {
    console.log ("Numero negativo")
}

const nota = Number(prompt("Digite sua nota"))
if (nota >= 60) {
    alert("Aprovado")
} else {
    alert("Voce está reprovado")
}

const numero1 = Number(prompt ("Insira um número"))
if (numero1 > 0) {
    alert("O número é positivo")
} else if (numero1 < 0) {
    ("O número é negativo")
}
else {
    console.log("zero")
}
*/

/*const idade2 = Number(prompt("Insira sua idade"))
if (idade2 === 0 && idade2 <= 12) {
    console.log("Você é uma criança")
} else if (idade2 >= 13 && idade2 <= 17 ) {
    console.log("Voce é um adolescente")
} else if (idade2 >= 18) {
     console.log("Voce é um adulto")
}else {
    console.log("Numero invalido")
}
*/

const numero3 = Number(prompt ("Digite um número"))
if (numero3 % 2 == 0) {
    alert("O numero é par")
} else {
    alert("O número é impar")
}


   
/*const idade = Number(prompt("Digite sua idade"))

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é de menor")
}


const numero = Number(prompt("Digite um número"))
if (numero >= 1) {
    console.log ("Numero positivo")
} else {
    console.log ("Numero negativo")
}

const nota = Number(prompt("Digite sua nota"))
if (nota >= 60) {
    alert("Aprovado")
} else {
    alert("Voce está reprovado")
}

const numero1 = Number(prompt ("Insira um número"))
if (numero1 > 0) {
    alert("O número é positivo")
} else if (numero1 < 0) {
    ("O número é negativo")
}
else {
    console.log("zero")
}
*/

/*const idade2 = Number(prompt("Insira sua idade"))
if (idade2 === 0 && idade2 <= 12) {
    console.log("Você é uma criança")
} else if (idade2 >= 13 && idade2 <= 17 ) {
    console.log("Voce é um adolescente")
} else if (idade2 >= 18) {
     console.log("Voce é um adulto")
}else {
    console.log("Numero invalido")
}
*/

/* const numero3 = Number(prompt ("Digite um número"))
if (numero3 % 2 == 0) {
    alert("O numero é par")
} else {
    alert("O número é impar")
}

*/

//Calculadora simples
const n1 = Number(prompt ("Numero 1:"));
const operacao = prompt("Operação (+, -, *, /) :");
const n2 = Number(prompt ("Numero 2:"));
let resultado;
if (operacao === "+") {
    resultado = n1 + n2;
} else if (operacao === "+") {
    resultado = n1 - n2;
} else if (operacao === "*") {
    resultado = n1 * n2;
} else if (operacao === "/") {
    resultado = n1 / n2;
} else {
    alert("Operação inválida!");
}
alert("Resultado: = " = resultado)
   
/// 2 - Maior entre três números:

let num1 = Number(prompt("Digite o primeiro numero"))
let num2 = Number(prompt("Digite o segundo numero"))
let num3 = Number(prompt("Digite o terceiro numero"))

if (num1 > num2 && num1 > num3) {
    alert ("O maior numero é: " + num1);
} else if (num2 > num3 && num2 > num1) {
    alert("O maior numero é: "+ num2);    
} else {
    alert("O maior numero é: " + num3);
}git 