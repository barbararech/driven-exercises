import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from '../db.js';
import userSchema from '../schemas/userSchema.js';

export async function signUp(req, res) {
  const user = req.body;

  // const validation = userSchema.validate(user);
  // if (validation.error) {
  //   return res.sendStatus(422);
  // }

  const passwordHash = bcrypt.hashSync(user.password, 10);

  await db.collection('users').insertOne({ ...user, password: passwordHash })

  res.sendStatus(201);
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  const user = await db.collection('users').findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = uuid();

    await db.collection('sessions').insertOne({ token, userId: user._id });

    res.send(token);
  } else {
    res.sendStatus(401);
  }
}