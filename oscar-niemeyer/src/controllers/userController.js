import db from "../databases/mongo.js";

export async function GetUser(req, res) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  const session = await db.collection("sessions").findOne({ token });
  if (!session) {
    return res.sendStatus(401);
  }

  const user = await db.collection("users").findOne({ _id: session.userId });
  if (!user) {
    return res.sendStatus(401);
  }

  delete user.password;

  res.send(user);
}

export async function UpdateUser(req, res) {
  const newUser = req.body;
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  const session = await db.collection("sessions").findOne({ token });
  if (!session) {
    return res.sendStatus(401);
  }

  const user = await db.collection("users").findOne({ _id: session.userId });
  if (!user) {
    return res.sendStatus(401);
  }

  await db.collection("users").updateOne(
    {
      _id: session.userId,
    },
    {
      $set: newUser,
    }
  );

  res.sendStatus(200);
}

export async function DeleteUser(req, res) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  const session = await db.collection("sessions").findOne({ token });
  if (!session) {
    return res.sendStatus(401);
  }

  const user = await db.collection("users").findOne({ _id: session.userId });
  if (!user) {
    return res.sendStatus(401);
  }

  await db.collection("users").deleteOne({ _id: session.userId });

  res.sendStatus(200);
}
