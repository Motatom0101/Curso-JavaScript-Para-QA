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

*/

function soma(n1, n2){
    return n1 + n2
}

var resultado = soma(7,7)
console.log(resultado)