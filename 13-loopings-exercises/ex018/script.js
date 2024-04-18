const botao = document.querySelector("input#botao");
botao.addEventListener("click", gerarTabuada);

function gerarTabuada() {
	let num = document.querySelector("input#txtnum");
	let tab = document.querySelector("select#seltab");
    
	if (num.value.length != 0) {
		let n = Number(num.value);
		let c = 1;
		tab.innerHTML = "";
		while (c <= 10) {
			let item = document.createElement("option");
			item.text = `${n} x ${c} = ${n * c}`;
			item.value = `tab${c}`;
			tab.appendChild(item);
			c++;

			item.style.fontWeight = "bold";
			item.style.fontSize = "1.3em";
			item.style.letterSpacing = ".3em";
			item.style.textAlign = "start";
			tab.style.padding = "1rem 5rem";
		}
	} else {
		window.alert("Por favor, digite um número!");
	}
}
