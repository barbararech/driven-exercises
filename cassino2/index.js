import chalk from 'chalk';
import random from './random.js'

let numsorte = random(2,12);
let primeironum = random(1,6);
let segundonum = random(1,6);

console.log(chalk.blue(`Seu número da sorte é: ${numsorte}`))

console.log("Jogando dados...")

setTimeout(() => {
    console.log(`Você tirou ${primeironum} no primeiro dado!`);
}, 2000);

setTimeout(() => {
    console.log(`Você tirou ${segundonum} no primeiro dado!`);
}, 4000);

setTimeout(() => {
    const soma = primeironum + segundonum;
    if(primeironum === segundonum || soma === numsorte) {
        console.log(chalk.green("Você ganhou!"));
    } else {
        console.log(chalk.red("Você perdeu!"));
    }
}, 5000);