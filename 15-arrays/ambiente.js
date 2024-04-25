let num = [5, 8, 9, 4, 3]
num[5] = 6
num.push(2, 7, 1, 0)

console.log("Vetor normal:");
console.log(num);

console.log(`Temos ${num.length} elementos neste vetor.`);
console.log(`O terceiro valor do vetor é ${num[2]}.`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}.`);

num.sort() 
pos = num.indexOf(8)
console.log("Vetor ordenado em ordem crescente:");
console.log(num);

console.log(`Agora o valor 8 está na posição ${pos}.`);

