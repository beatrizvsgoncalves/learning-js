function zeroFill(num, numLength) {
    var numberStr = num.toString();
    return numberStr.padStart(numLength, "0");
}

function carregar() {
	var msg = document.querySelector("div#msg");
	var img = document.querySelector("img#img");
	var data = new Date();
	var hora = zeroFill(data.getHours());
	var minutos = zeroFill(data.getMinutes());
    
	msg.innerHTML = `Agora é ${hora}:${minutos}.`;

    if (hora > 3) {
        
    }

}
