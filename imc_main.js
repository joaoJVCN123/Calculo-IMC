let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')

calcular.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    
    console.log(nome, idade, peso, altura)

    const pessoa1 = new Pessoa(nome, idade, altura, peso)
    console.log(pessoa1)

    let imc = pessoa1.calculaimc()
    console.log(imc)

    resposta.innerHTML = `O cliente ${pessoa1.nome} <br>`
    resposta.innerHTML += `Tem ${pessoa1.idade} anos de idade <br>`
    resposta.innerHTML += `Com o peso de ${pessoa1.peso} e altura de ${pessoa1.altura} m <br>`
    resposta.innerHTML += `Tem um IMC igual a ${imc}`
})