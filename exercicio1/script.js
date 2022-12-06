
// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.


let coxinha = prompt(`Você deseja comer mais coxinha ? digite 
S- para sim 
N- para não `).toLocaleUpperCase();

let total = 0;

let conta = 0;

let valor = 2.50;

while(coxinha=== "S"){
    conta =  conta + valor
    
    total++
    coxinha = prompt(`Você deseja comer mais coxinha ? digite 
    S- para sim 
    N- para não `).toLocaleUpperCase()

};
console.log(`foram ${total} coxinhas e o total da conta é ${conta.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`);


