import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

let tempo = 0;
let idIntervalo;

server.post("/iniciar", (req, res) => {
  idIntervalo = setInterval(() => {
    tempo++;
  }, 1000);

  res.send("Cronômetro iniciado");
});

server.post("/parar", (req, res) => {
  clearInterval(idIntervalo);
  res.send({ tempo: tempo });
  tempo = 0;
});

server.listen(5000);
