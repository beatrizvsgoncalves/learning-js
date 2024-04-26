let botaoAdicionar = document.querySelector("input#botao-adicionar");
botaoAdicionar.addEventListener("click", adicionarNumero);

function adicionarNumero() {
	var num = document.querySelector("input#txtnum");
	let listaAdicionados = document.querySelector("select#lista");

	if (num.value.length != 0 && n >= 1 && n <= 100) {
		var n = [Number(num.value)];
		let item = document.createElement("option");
		item.text = `Valor ${n} adicionado`;
		item.value = "numero";
		item.style.fontSize = "1.2em";
        item.style.padding = ".3rem"
		listaAdicionados.appendChild(item);
	} else {
		window.alert("Valor inválido ou já encontrado na lista!");
	}

	/* 
	let botaoFinalizar = document.querySelector("input#botao-finalizar");
	botaoFinalizar.addEventListener("click", finalizar);
	function finalizar() {
        if (num.value.length != 0) {
            n.sort()
            let msg = document.querySelector("div#msg")
            msg.innerHTML = `<p>Ao todo, temos ${n.length} números cadastrados.</p>`
            msg.innerHTML += `<p>O maior valor informado foi ${n.indexOf(n.length)}.</p>`

        } else {
            window.alert("Adicione números antes de finalizar!")
        }
    } */
}
