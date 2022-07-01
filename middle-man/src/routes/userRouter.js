import { Router } from "express";
import {
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { validateUser } from "../middleware/schemaValidationMiddleware.js";

const userRouter = Router();
userRouter.get("/user", getUser);
userRouter.put("/user", validateUser, updateUser);
userRouter.delete("/user", deleteUser);
export default userRouter;
