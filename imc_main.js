let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')

calcular.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    
    console.log(nome, idade, peso, altura)
})