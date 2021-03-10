let nome = document.getElementById('texto')
//let dados = document.getElementById('entrada')
let caixa = document.getElementById('sel')
let nomes = []

function palavra(n) {
    if (String(n.length) != 0) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(String(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (palavra(nome.value) && !inLista(nome.value, nomes)) {
        nomes.push(String(nome.value))
        let criar = document.createElement('option')
        criar.text = `A palavra ${nome.value} foi adicionada`
        caixa.appendChild(criar)
        //dados.innerHTML += `A palavra ${nome.value} foi adicionada<br>`
    } else {
         window.alert('[ERRO] Palavra inválida ou já encontrada na lista')
    }
    nome.focus()
    nome.value = ''
}

function finalizar() {
    if (nomes.length == 0) {
        window.alert ('Insira uma palavra antes de finalizar')
    } else {
        for(let pos = 0; pos < nomes.length; pos++) {
            nomes.sort()
            res.innerHTML += `-${nomes[pos]}/<br>`
        }
    }
}



    

