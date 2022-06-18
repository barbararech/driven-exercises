import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const tasks = [];

server.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.send(task);
});

server.get("/tasks", (req, res) => {
  res.send(tasks);
});

server.listen(5000, () => {
  console.log("Servidor funcionando!");
});
