var inicio = 5
var passo = 2
var fim = 12
var cont = inicio

console.log(inicio)

while (cont < fim) {
    cont = cont + passo
    if (cont > fim) {
        cont = fim
    }
    console.log(cont)
}
