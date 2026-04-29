

//Ex1

/*for (let i = 1; i <= 10; i++) {
    console.log (i);
}
   */
  

//Ex2
/*const numero = Number(prompt("Digite um numero"))
if (Number.isNaN (numero)) {
    console.log("Numero inválido")
} else {
    console.log(`\n Tabuada do ${numero}\n`);

  for (let i = 1; i <=10; i++) {
  const resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
  }

    }*/

  //Ex3
/*const N = Number(prompt("Digite um número:"));
let soma = 0;
for (let i = 1; i <= N; i++) {
    soma += i;
}
alert(`Soma de 1 até ${N} = ${soma}`);
*/


//Nível intermediario números pares de 1 a 50 (1)
/*console.log("numeros pares de 0 a 50 \n");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}*/

//Nivel intermediario jogo de adivinhação (2)

/*const numeroSecreto = Math.floor(Math.random() * 100) +1;

let palpite =0;

while (palpite !== numeroSecreto) {
  palpite = Number(prompt("Adivinhe o número (1 a 100):"));

  if (palpite > numeroSecreto) {
    console.log("O número é menor");
    }else if (palpite < numeroSecreto) {
      console.log("O número é maior");
    }else {
      console.log("Acertou!!!");
    }
  }
*/


/*//Nivel intermediario contagem regressiva (3)

let tempo =10;
console.log("Iniciando contagem regressiva...")

while (tempo > 0) {
  console.log(`${tempo}...`);

  tempo--
}
console.log("Contagem regressiva chegou ao final!")
*/

