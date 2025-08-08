import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { validate } from "../middlewares/validate";
import { loginSchema } from "../validation/auth/LoginSchema";
import { registerSchema } from "../validation/auth/RegisterSchema";

const router = Router();

router.post("/login", validate(loginSchema), login);
router.post("/register", validate(registerSchema), register);

export default router;
