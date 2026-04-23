const nota1 = Number(prompt ("Digite a primeira nota"));
const nota2 = Number(prompt ("Digite a segunda nota"));

       const media = (nota1 + nota2) / 2;

       alert(`Média: ${media.toFixed (1)}`);

       //Idade detalhada
       //Converter anos em meses, dias, horas e minutos.

       //Faça um programa que leia a **idade
       // de uma pessoa em anos** e mostre a mesma idade aproximada em:

       //- Meses
       //- Dias
       //- Horas
       //- Minutos
       //Use **365 dias por ano** como simplificação.

       const anos = Number(prompt ("Digite sua idade em anos:"));
       const meses = anos * 12;
       const dias = anos * 365;
       const horas = dias * 24;
       const minutos = horas * 60;

       console.log(`Idade informada: ${anos} anos`);
       console.log("------------------");
       console.log(`${meses} meses`);
       console.log(`${dias} dias`);
       console.log(`${horas} horas`);
       console.log(`${minutos} minutos`);

       // Celsius - Fahrenheit
       //Converter temperatura de Celsius para Fahrenheit.

       //Fórmula: F = (C x 9/5) +32

       const celsius = Number(prompt("Temperatura em C:"));
       const f = (celsius * 9/5) +32;
       alert(`${celsius} C = ${f.toFixed (1)} F`);