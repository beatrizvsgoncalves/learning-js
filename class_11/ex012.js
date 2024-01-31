var idade = 32
var voto = undefined

if (idade < 16) {
    voto = 'você não vota.'
} else if (idade < 18 || idade > 65) {
    voto = 'seu voto é opcional.'
} else {
    voto = 'seu voto é obrigatório.'
}

console.log(`Você tem ${idade} anos. De acordo com a lei, nas eleições ${voto}`);