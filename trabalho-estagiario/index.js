import fs from 'fs';

let cont=0;

while(cont<100){
    cont++;
    fs.writeFileSync(`${cont}.txt`, `Lista 1 - Cálculo 1 - Exercício ${cont}`)
}