import db from "../db.js";
import { ObjectId } from "mongodb";

export async function getUser(req, res) {
  const { user } = req.locals;

  res.send(user);
}

export async function updateUser(req, res) {
  const newUser = req.body;
  const { user } = res.locals;

  await db.collection("users").updateOne(
    {
      _id: ObjectId(user._id),
    },
    {
      $set: newUser,
    }
  );

  res.sendStatus(200);
}

export async function deleteUser(req, res) {
  const { user } = req.locals;
  await db.collection("users").deleteOne({ _id: ObjectId(user._Id) });

  res.sendStatus(200);
}
