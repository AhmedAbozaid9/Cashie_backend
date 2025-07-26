import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  return res.status(200).json({ message: "Login successful" });
};

export const register = (req: Request, res: Response) => {
  return res.status(201).json({ message: "Registration successful" });
};

