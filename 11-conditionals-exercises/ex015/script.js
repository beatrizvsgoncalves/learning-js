const zeroFill = n => {
	return ('0' + n).slice(-2);
}

function carregar() {
	var msg = document.querySelector("div#msg");
	var img = document.querySelector("img#img");
	var data = new Date();
	var hora = zeroFill(data.getHours());
	var minutos = zeroFill(data.getMinutes());
    
	msg.innerHTML = `Agora é ${hora}:${minutos}.`;

    if (hora >= 0 && hora < 4) {
        // BOA MADRUGADA - NIGHT
		img.src = './img/night.png'
		document.body.style.backgroundColor = '#061c31'
    } else if (hora >= 4 && hora < 6) {
		// BOM MADRUGADA - DAWN
		img.src = './img/dawn.png'
		document.body.style.backgroundColor = '#265f7c'
	} else if (hora >= 6 && hora < 12) {
		// BOM DIA - MORNING
		img.src = './img/morning.png'
		document.body.style.backgroundColor = '#e2cd9f'
	} else if (hora == 12) {
		// BOA TARDE - MID-DAY
		img.src = './img/mid-day.png'
		document.body.style.backgroundColor = '#1d96cf'
	} else if (hora > 12 && hora < 16) {
		// BOA TARDE - AFTERNOON
		img.src = './img/afternoon.png'
		document.body.style.backgroundColor = '#89a6b5'
	} else if (hora >= 16 && hora < 18) {
		// BOA TARDE - DUSK
		img.src = './img/dusk.png'
		document.body.style.backgroundColor = '#976169'
	} else if (hora == 18) {
		// BOA NOITE - DUSK
		img.src = './img/dusk.png' 
		document.body.style.backgroundColor = '#764655'
	}
	else if (hora > 18) {
		// BOA NOITE - NIGHT
		img.src = './img/night.png'
		document.body.style.backgroundColor = '#11314a'
	}

}
