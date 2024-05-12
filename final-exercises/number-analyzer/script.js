let num = document.querySelector("input#txtnum")
let lista = document.querySelector("select#lista")
let res = document.querySelector("div#res")
let valores = []
let botaoAdicionar = document.querySelector("input#botao-adicionar");
botaoAdicionar.addEventListener("click", adicionarNumero);

function isNumero(n) {
	if (Number(n) >= 1 && Number(n) <= 100) {
		return true
	} else {
		return false
	}
}

function inLista(n, l) {
	if (l.indexOf(Number(n)) != -1) {
		return true
	} else {
		return false
	}
}

function adicionarNumero() {
	if (isNumero(num.value) && !inLista(num.value, valores)) {
		valores.push(Number(num.value))
		let item = document.createElement("option");
		item.text = `Valor ${num.value} adicionado`;
		item.value = "numero";
		item.style.fontSize = "1.2em";
        item.style.padding = ".3rem"
		lista.appendChild(item);
		res.innerHTML = ""
	} else {
		window.alert("Valor inválido ou já encontrado na lista.")
	}
	num.value = ""
	num.focus()
}
	let botaoFinalizar = document.querySelector("input#botao-finalizar");
	botaoFinalizar.addEventListener("click", finalizar);

	function finalizar() {
        if (valores.length != 0) {
			let total = valores.length
			let maior = valores[0]
			let menor = valores[0]
			let soma = 0
			for (let pos in valores) {
				soma += valores[pos]
				if (valores[pos] > maior) {
					maior = valores[pos]
				} else if (valores[pos] < menor) {
					menor = valores[pos]
				}
			}
			let media = soma / total
			
			res.innerHTML = `
				<p>Ao todo, temos ${total} números cadastrados.</p>
				<p>O maior valor informado foi ${maior}.</p>
				<p>O menor valor informado foi ${menor}.</p>
				<p>Somando todos os valores, temos ${soma}.
				<p>A média dos valores digitados é ${media}.
				`
        } else {
            window.alert("Adicione números antes de finalizar!")
        }
	}
