import { Router } from "express";
import {
  addAccount,
  deleteAccount,
  getAccounts,
  updateAccount,
} from "../controllers/account.controller";
import { validate } from "../middlewares/validate";
import {
  accountSchema,
  accountUpdateSchema,
} from "../validation/accountSchema";

const router = Router();

router.get("/", getAccounts);
router.post("/", validate(accountSchema), addAccount);
router.patch("/:id", validate(accountUpdateSchema), updateAccount);
router.delete("/:id", deleteAccount);

export default router;
