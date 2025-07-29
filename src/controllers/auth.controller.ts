import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import {PrismaClient} from "@prisma/client";

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

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if(!user) {
        return res.status(401).json({
            error: "Invalid Email or Password",
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({
            error: "Invalid Email or Password",
        });
    }

    const token = generateToken(user.id, user.email)

  const userWithoutPassword = Object.assign({}, user);
  delete (userWithoutPassword as any).password;
    return res.status(200).json({
        message: "Login successful",
        user: userWithoutPassword,
        token,
    });
};

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
