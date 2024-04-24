let valores = [11, 56, 48, 33, 29, 20, 16, 18] 

/* 
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} contém o valor ${valores[pos]}`);
}  
*/

for (let pos in valores) {
    console.log(`A posição ${pos} contém o valor ${valores[pos]}`);
}