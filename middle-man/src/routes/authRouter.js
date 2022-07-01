import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
import { validateUser } from "../middleware/schemaValidationMiddleware.js";

const authRouter = Router();
authRouter.post("/sign-up", validateUser, signUp);
authRouter.post("/sign-in", signIn);
export default authRouter;
