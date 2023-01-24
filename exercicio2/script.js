// # Exercício 2

// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

let tabuada = +(prompt("Digite um numero"))
let i = 0
console.log(`TABOADA DO ${tabuada}`)
while(i <= 10 ){
    console.log(`${tabuada} X ${i} = `,tabuada*i)
    i++
}

