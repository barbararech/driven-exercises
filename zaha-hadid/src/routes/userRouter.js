import { Router } from "express";
import {
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/user", getUser);

userRouter.put("/user", updateUser);

userRouter.delete("/user", deleteUser);

export default userRouter;
