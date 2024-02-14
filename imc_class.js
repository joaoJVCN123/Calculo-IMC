class Pessoa{
    constructor(nome, idade, peso, altura){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    calculaimc(){
        let peso = this.peso
        let altura = this.altura
        let imcresultado = peso / (altura * altura)
        return imcresultado
    }
}