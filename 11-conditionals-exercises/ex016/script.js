const botao = document.querySelector("input#botao");
botao.addEventListener("click", verificar);

function verificar() {
	const data = new Date();
	const anoAtual = data.getFullYear();
	const anoNasc = document.querySelector("input#id-ano-nasc");
    const msg = document.querySelector('div#msg')

	if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
	} else {
        const sexo = document.getElementsByName("sexo");
		const idade = anoAtual - Number(anoNasc.value);
        var genero = undefined
        
        if (sexo[0].checked) {
            genero = 'Homem'
        } else if (sexo[1].checked) {
            genero = 'Mulher'
        }
        
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`


        
        const img = document.querySelector('div#imagem')
        
        if (genero == "Homem" && idade <= 8) {
            img.innerHTML = `<img src="./img/masc-kid.png">`
        } else if (genero == "Homem" && idade <= 16) {
            img.innerHTML = `<img src="./img/masc-teen.png">`
        } else if (genero == "Homem" && idade <= 30) {
            img.innerHTML = `<img src="./img/masc-young.png">`
        } else if (genero == "Homem" && idade <= 60 ) {
            img.innerHTML = `<img src="./img/masc-man.png">`
        } else if (genero == "Homem" && idade > 60) {
            img.innerHTML = `<img src="./img/masc-old-man.png">`
        }
        
        if (genero == "Mulher" && idade <= 8) {
            img.innerHTML = `<img src="./img/fem-kid.png"`
        } else if (genero == "Mulher" && idade <= 16) {
            img.innerHTML = `<img src="./img/fem-teen.png"`
        } else if (genero == "Mulher" && idade <= 30) {
            img.innerHTML = `<img src="./img/fem-young.png"`
        } else if (genero == "Mulher" && idade <= 60) {
            img.innerHTML = `<img src="./img/fem-woman.png"`
        } else if (genero == "Mulher" && idade > 60) {
            img.innerHTML = `<img src="./img/fem-old-woman.png"`
        }
    }
}
