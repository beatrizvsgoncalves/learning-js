const botao = document.querySelector("input#botao")
botao.addEventListener("click", contar)

function contar() {
    let inicio = document.querySelector("input#txti")
    let fim = document.querySelector("input#txtf")
    let passo = document.querySelector("input#txtp")
    let msg = document.querySelector("div#msg")
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        msg.innerHTML = 'Impossível contar!'
    } else {
        msg.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (let cont = i; cont <= f; cont += p) {
                msg.innerHTML += `${cont} \u{1F449}`
            }
        } else {
            // Contagem regressiva 
            for (let cont = i; cont >= f; cont -= p) {
                msg.innerHTML += `${cont} \u{1F449}`
            }
        }
        msg.innerHTML += `\u{1F3C1}`
    }
}