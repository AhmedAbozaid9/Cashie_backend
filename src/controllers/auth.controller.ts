import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(`Email: ${email}, Password: ${password}`);
  return res.status(200).json({ message: "Login successful" });
};

export const register = (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(201).json({ message: "Registration successful" });
};
