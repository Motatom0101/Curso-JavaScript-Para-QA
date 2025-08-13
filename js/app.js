console.log('Olá, mundo!')

var usarName = 'Mota'

document.getElementById('user-name').innerHTML = usarName

console.log('================================')

/*
function soma(n1, n2){
    console.log(n1 + n2)
}
soma(14, 15)


function boasVindas(nome){
   alert(nome + ', Seja bem-vindo(a)!') 
}

boasVindas('Tiago')



function soma(n1, n2){
    return n1 + n2
}

var resultado = soma(7,7)
console.log(resultado)

*/


//-----Controle de Fluxos-----//


// SENDO eu um cliente correntista do banco
// POSSO sacar dinheiro em caixas eletrônicos
// PARA poder comprar em lugar que não aceita o cartão de débito ou crédito

// CENÁRIO 1: Saque com sucesso
// DADO que meu saldo é de 1000 reais
// QUANDO faço um saque de 500 reais
// ENTÃO o valor do saque será deduzido do meu saldo

// CENÁRIO 2: Saque com valor superior ao saldo
// DADO que meu saldo é de 1000 reais
// QUANDO faço um saque de 1001 reais
// ENTÃO não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta, informando que o saldo é insuficiente.

// CENÁRIO 3: Saque com valor máximo
// DADO que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700
// QUANDO faço um saque no valor de 701 reais
// ENTÃO não deve deduzir do eu saldo
// E deve mostrar o seguinte alerta: "o valor do saque é superior ao permitido por operação"

