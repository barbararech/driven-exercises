
let numsorte = randomNumber(2,12);
let primeironum = randomNumber(1,6);
let segundonum = randomNumber(1,6);

function randomNumber(min, max) { // min e max inclusos
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(`Seu número da sorte é: ${numsorte}`)

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
        console.log("Você ganhou!");
    } else {
        console.log("Você perdeu!");
    }
}, 5000);