import { Router } from "express";
import { addAccount, getAccounts } from "../controllers/account.controller";
import { validate } from "../middlewares/validate";
import { accountSchema } from "../validation/accountSchema";

const router = Router();

router.get("/", getAccounts);
router.post("/", validate(accountSchema), addAccount);

export default router;
