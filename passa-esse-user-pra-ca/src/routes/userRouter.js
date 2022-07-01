import { Router } from "express";
import {
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import userSchemaValidationMiddleware from "../middlewares/userSchemaValidationMiddleware.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";

const userRouter = Router();

userRouter.get("/user", tokenValidationMiddleware, getUser);
userRouter.put("/user", userSchemaValidationMiddleware, updateUser);
userRouter.delete("/user", tokenValidationMiddleware, deleteUser);

export default userRouter;
