import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { validate } from "../middlewares/validate";
import { loginSchema } from "../validation/LoginSchema";

const router = Router();

router.post("/login", validate(loginSchema), login);
router.post("/register", register);

export default router;
