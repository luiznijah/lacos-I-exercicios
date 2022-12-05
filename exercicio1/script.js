
// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.


let coxinha = prompt("Você deseja comer mais coxinha sim ou não ?").toLocaleUpperCase()
let total = 0
let conta = 0
let valor = 2.50
while(coxinha=== "S"){
    conta =  conta + valor
    
    total++
    coxinha = prompt("Você deseja comer mais coxinha sim ou não ?").toLocaleUpperCase()

}
console.log(`foram ${total} coxinhas e o total da conta é ${conta.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`)


// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.