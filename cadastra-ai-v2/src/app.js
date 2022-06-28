import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect(() => {
  db = mongoClient.db("cadastra-ai-v2");
});

const app = express();
app.use(express.json());

app.post("/sign-up", async (req, res) => {
  //name, email, password
  const user = req.body;

  const passwordHash = bcrypt.hashSync(password, 10);

  await db.collection("users").insertOne({ ...user, senha: passwordHash });

  // Insira o usuário no banco, criptografando a senha com bcrypt

  res.sendStatus(201);
});

app.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  const user = await db.collection("users").findOne({ email });
  // Busque o usuário no banco e valide a senha usando bcrypt

  if (user && bcrypt.compareSync(password, user.password)) {
    // Caso encontrado
    res.sendStatus(200);
  } else {
    // Caso não encontrado
    res.sendStatus(401);
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000.");
});
