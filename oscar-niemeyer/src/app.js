import express from "express";
import { SignIn, SignUp } from "./controllers/authController";
import { GetUser, UpdateUser, DeleteUser } from "./controllers/userController";

const app = express();
app.use(express.json());

app.post("/sign-up", SignUp);

app.post("/sign-in", SignIn);

app.get("/user", GetUser);

app.put("/user", UpdateUser);

app.delete("/user", DeleteUser);

app.listen(5000, () => {
  console.log("Server is listening on port 5000.");
});
