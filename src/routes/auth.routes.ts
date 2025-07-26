import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  return res.status(200).json({ message: "Login successful" });
});

router.post("/register", (req, res) => {
  return res.status(201).json({ message: "Registration successful" });
});

export default router;

