import express from 'express';

const app = express(); // Cria um servidor

app.get("/hello", (request, response) => {
    // Manda como resposta o texto 'Hello World'
    response.send('Meu primeiro servidor, yay!');
});

// Configura o servidor para rodar na porta 4000
app.listen(5000);