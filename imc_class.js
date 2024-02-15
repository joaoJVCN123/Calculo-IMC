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
        return imcresultado.toFixed(2)
    }
    classificaimc(){
        let imcresultado = this.calculaimc()
        console.log(imcresultado)
        if((imcresultado >= 0)&&(imcresultado < 17)){
        return "Muito abaixo do peso"
        }else if((imcresultado >= 17) && (imcresultado < 18.5)){
        return "Abaixo do peso"
        }else if((imcresultado >= 18.5) && (imcresultado < 25)){
        return "Peso normal"
        }else if((imcresultado >= 25) && (imcresultado < 30)){
        return "Acima do peso"
        }else if((imcresultado >= 30) && (imcresultado < 35)){
        return "Obesidade grau I"
        }else if((imcresultado >= 35) && (imcresultado < 40)){
        return "Obesidade grau II"
        }else{
        return "Cálculo invalido"
        }
    }
}