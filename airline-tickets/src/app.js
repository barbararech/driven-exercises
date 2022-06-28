import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import joi from "joi";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect(() => {
  db = mongoClient.db("airline_tickets");
});

const app = express();
app.use(express.json());

app.get("/tickets", async (req, res) => {
  try {
    const tickets = await db.collection("tickets").find().toArray();
    res.send(tickets);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get("/tickets/:number", async (req, res) => {
  const number = req.params.number;

  // validar
  const userSchema = joi.object({
    number: joi
      .string()
      .pattern(/^[a-zA-Z]{3}[0-9]{4}$/)
      .required(),
  });

  const validation = userSchema.validate(number);

  if (validation.error) {
    console.log(validation.error.details);
    res.sendStatus(422);
  }

  try {
    const ticket = await db.collection("tickets").findOne({ number });
    if (!ticket) {
      return res.sendStatus(404);
    }

    res.send(ticket);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post("/tickets", async (req, res) => {
  const ticket = req.body;

  // validar
  const userSchema = joi.object({
    full_name: joi.string().required(),
    age: joi.number().integer().required(),
    ticket_number: joi
      .string()
      .pattern(/^[A-Z]{3}[0-9]{4}$/)
      .required(),
  });

  const validation = userSchema.validate(ticket);

  if (validation.error) {
    console.log(validation.error.details);
  }

  try {
    await db.collection("tickets").insertOne(ticket);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000.");
});
