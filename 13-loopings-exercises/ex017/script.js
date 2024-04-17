const botao = document.querySelector("input#botao").addEventListener("click", contar)

function contar() {
    var inicio = document.querySelector("input#inicio").value
    var fim = document.querySelector("input#fim").value
    var passo = document.querySelector("input#passo").value
    var msg = document.querySelector("div#msg")
    
    while (inicio <= fim) {
        inicio + passo
        console.log(inicio)
    }

    msg.innerHTML = `Contando:`
}