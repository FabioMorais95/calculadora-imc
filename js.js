
const btn = document.querySelector('.calcular')


btn.addEventListener('click', () => {
    const nome = document.querySelector(".nome").value
    const altura = document.querySelector('.altura').value
    const peso = document.querySelector('.peso').value
    const calculo = (peso / (altura * altura)).toFixed(1)
    let classificacao = ""

    if(nome == '' || altura =='' || peso == ''){
        resultado = document.querySelector('#resultado').innerHTML = 'Preencha todos os campos'
    }

    if (calculo < 18) {
        classificacao = 'Abaixo do peso'
    } else if (calculo < 25) {
        classificacao = 'com Peso ideal'
    }else if(calculo < 29.9){
        classificacao = 'Sobrepeso'
    }else if(calculo < 39){
        classificacao = 'Obesidade'
    }else if(calculo > 40){
        classificacao = 'Obesidade grave'
    }
    const resultado = document.querySelector('#resultado').innerHTML = `${nome}, Seu imc é: ${calculo} e você está ${classificacao}`
    clearInputs()
})
function clearInputs(){
    document.querySelector(".nome").value = ''
    document.querySelector('.altura').value = ''
    document.querySelector('.peso').value = ''
}
