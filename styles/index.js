const nome = document.getElementById('nome-input')
const numero = document.getElementById('numero-input')
const mes = document.getElementById('mes-input')
const ano = document.getElementById('ano-input')
const cvc = document.getElementById('cvc-input')

function digitarNome(){
    if(nome.value == ""){
        document.getElementById("h2nome").innerHTML = 'Can`t be blank'
        document.getElementById('nome-input').style.border = '1px red solid'
    }else{
        document.getElementById("h2nome").innerHTML = ''
        document.getElementById('nome-input').style.border = '1px rgba(0, 0, 0, 0.496) solid'
    }
    document.getElementById('nome').innerHTML = String(nome.value).toUpperCase()
}

function digitarNumber(){
    if(numero.value == ""){
        document.getElementById("h2numero").innerHTML = 'Can`t be blank'
        document.getElementById('numero-input').style.border = '1px red solid'
    }else{
        document.getElementById("h2numero").innerHTML = ''
        document.getElementById('numero-input').style.border = '1px rgba(0, 0, 0, 0.496) solid'
    }

    let num = "";
    let cont = 0;
    
    Array.from(numero.value).forEach(n => {
        cont++;
        num += n;
        if(cont == 4){
            num += " ";
            console.log("ue")
            cont = 0;
        }
    });

    if(num){
        document.getElementById('numeros').innerHTML = num;
    }
    
    function isNumber(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    if(!(isNumber((numero.value).replaceAll(' ', '')))){
        if(numero.value === ''){
            document.getElementById("h2numero").innerHTML = 'Can`t be blank'
        }else{
        document.getElementById("h2numero").innerHTML = 'Wrong format, number only'
        document.getElementById('numero-input').style.border = '1px red solid'

    }}
}

function digitarData(){
    if(mes.value == ""){
        document.getElementById("h2data").innerHTML = 'Can`t be blank'
        document.getElementById('mes-input').style.border = '1px red solid'
    }else{
        document.getElementById("h2data").innerHTML = ''
        document.getElementById('mes-input').style.border = '1px rgba(0, 0, 0, 0.496) solid'
    }
    document.getElementById('mes').innerHTML = mes.value

}
function digitarDataAno(){
    if(ano.value == ""){
        document.getElementById("h2data").innerHTML = 'Can`t be blank'
        document.getElementById('ano-input').style.border = '1px red solid'

    }else{
        document.getElementById("h2data").innerHTML = ''
        document.getElementById('ano-input').style.border = '1px rgba(0, 0, 0, 0.496) solid'

    }
    document.getElementById('ano').innerHTML = ano.value

}

function digitarCvc(){
    if(cvc.value == ""){
        document.getElementById("h2cvc").innerHTML = 'Can`t be blank'
        document.getElementById('cvc-input').style.border = '1px red solid'

    }else{
        document.getElementById("h2cvc").innerHTML = ''
        document.getElementById('cvc-input').style.border = '1px rgba(0, 0, 0, 0.496) solid'

    }
    document.getElementById('cvc').innerHTML = String(cvc.value).toUpperCase()

}
