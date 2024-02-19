const botao = document.querySelector("input#botao");
botao.addEventListener("click", verificar);

function verificar() {
	const data = new Date();
	const anoAtual = data.getFullYear();
	const anoNasc = document.querySelector("input#id-ano-nasc");
	const msg = document.querySelector("div#msg");
	const img = document.createElement("img");
	img.setAttribute("id", "foto");

	if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual) {
		window.alert("[ERRO] Verifique os dados e tente novamente!");
	} else {
		const sexo = document.getElementsByName("sexo");
		const idade = anoAtual - Number(anoNasc.value);
		var genero = undefined;

		if (sexo[0].checked) {
			genero = "Homem";

			if (idade <= 2) {
				img.setAttribute("src", "./img/masc-baby.png");
			} else if (idade >= 3 && idade <= 8) {
				img.setAttribute("src", "./img/masc-kid.png");
			} else if (idade <= 16) {
				img.setAttribute("src", "./img/masc-teen.png");
			} else if (idade <= 30) {
				img.setAttribute("src", "./img/masc-young.png");
			} else if (idade <= 60) {
				img.setAttribute("src", "./img/masc-man.png");
			} else {
				img.setAttribute("src", "./img/masc-old-man.png");
			}
		} else if (sexo[1].checked) {
			genero = "Mulher";

			if (idade <= 2) {
				img.setAttribute("src", "./img/fem-baby.png");
			} else if (idade >= 3 && idade <= 8) {
				img.setAttribute("src", "./img/fem-kid.png");
			} else if (idade <= 16) {
				img.setAttribute("src", "./img/fem-teen.png");
			} else if (idade <= 30) {
				img.setAttribute("src", "./img/fem-young.png");
			} else if (idade <= 60) {
				img.setAttribute("src", "./img/fem-woman.png");
			} else {
				img.setAttribute("src", "./img/fem-old-woman.png");
			}
		}

		msg.style.background = "#d3d3d3de";
		msg.style.border = "1px solid #376bbd";
		msg.style.borderRadius = ".2rem";
		msg.style.padding = ".4rem";
		msg.style.textAlign = "center";
		msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
		msg.appendChild(img);
	}
}
