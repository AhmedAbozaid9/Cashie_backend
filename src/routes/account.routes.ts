import { Router } from "express";
import { getAccounts } from "../controllers/account.controller";
import { auth } from "../middlewares/auth";

const router = Router();

router.get("/", auth, getAccounts);

export default router;
