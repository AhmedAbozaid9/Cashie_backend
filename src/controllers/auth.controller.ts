import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const generateToken = (userId: number, email: string) => {
  return jwt.sign(
    {
      userId,
      email,
    },
    process.env.JWT_SECRET || "your-secret-key"
  );
};

export const login = async (req: Request, res: Response) => {};

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(409).json({
      error: "User with this email already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  const token = generateToken(user.id, user.email);

  return res.status(201).json({
    message: "Registration successful",
    user,
    token,
  });
};
