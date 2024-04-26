let botaoAdicionar = document.querySelector("input#botao-adicionar");
botaoAdicionar.addEventListener("click", adicionarNumero);

function adicionarNumero() {
	let num = document.querySelector("input#txtnum");
	let listaAdicionados = document.querySelector("select#lista");

	if (num.value.length != 0 && num.value >= 1 && num.value <= 100) {
		var n = [Number(num.value)];
		n.sort()

		let item = document.createElement("option");
		item.text = `Valor ${n} adicionado`;
		item.value = "numero";
		item.style.fontSize = "1.2em";
        item.style.padding = ".3rem"
		listaAdicionados.appendChild(item);
	} else {
		window.alert("Valor inválido ou já encontrado na lista!");
	}

	
	let botaoFinalizar = document.querySelector("input#botao-finalizar");
	botaoFinalizar.addEventListener("click", finalizar);

	function finalizar() {
        if (num.value.length != 0) {
			let soma = 0
			for (let i = 0; i < n.length; i++) {
				soma += n[i]
			}

			let media = soma / 2

			let msg = document.querySelector("div#msg")
				msg.innerHTML = `
				<p>Ao todo, temos ${n.length} números cadastrados.</p>
				<p>O maior valor informado foi ${n[n.length - 1]}.</p>
				<p>O menor valor informado foi ${n[0]}.</p>
				<p>Somando todos os valores, temos ${soma}.
				<p>A média dos valores digitados é ${media}.
				`
        } else {
            window.alert("Adicione números antes de finalizar!")
        }
    }
}
