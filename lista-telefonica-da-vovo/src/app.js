import express, { json } from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const server = express();
server.use(cors());
server.use(json());

const mongoClient = new MongoClient(process.env.MONGO_URL);
let db;

mongoClient.connect().then(() => {
  db = mongoClient.db("lista-telefonica-da-vovo");
});

server.get("/contatos", (req, res) => {
  db.collection("contatos")
    .find({})
    .toArray()
    .then((contatos) => {
      res.send(contatos);
    });
  // escreva seu código aqui

});

server.post("/contatos", (req, res) => {
  if (!req.body.nome || !req.body.telefone) {
    res.status(422).send("Todos os campos são obrigatórios!");
    return;
  }

  db.collection("contatos")
    .insertOne(req.body)
    .then(() => {
      res.sendStatus(201);
    });
  // escreva seu código aqui

  res.sendStatus(201);
});

server.listen(5000, () => {
  console.log("Rodando em http://localhost:5000");
});
