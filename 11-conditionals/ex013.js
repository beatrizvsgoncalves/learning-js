var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

if (hora == 1 && minutos == 0) {
    console.log(`Agora é exatamente ${hora}:${minutos}0 hora.`);
} else if (minutos == 0) {
    console.log(`Agora é exatamente ${hora}:${minutos}0 horas.`);
} else if (minutos < 10) {
    console.log(`Agora é exatamente ${hora}:0${minutos}.`);
} else {
    console.log(`Agora é exatamente ${hora}:${minutos}.`);
}



if (hora < 6) {
    console.log('Boa madrugada!');
} else if (hora < 12 ) {
    console.log('Bom dia!');
} else if (hora < 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}