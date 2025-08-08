import type { Response } from "express";
import type { AuthenticatedRequest } from "../middlewares/auth";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAccounts = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  try {
    const user = req.user;

    const accounts = await prisma.account.findMany({
      where: user?.id !== undefined ? { userId: user.id } : {},
    });

    return res.status(200).json({ accounts });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to retrieve accounts",
      details: error instanceof Error ? error.message : String(error),
    });
  }
};

export const addAccount = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  try {
    const user = req.user;

    if (!user || typeof user.id !== "number") {
      return res.status(400).json({
        error: "User information is missing from request.",
      });
    }

    const { name, amount } = req.body;

    const newAccount = await prisma.account.create({
      data: {
        name,
        amount,
        userId: user.id,
      },
    });

    return res.status(201).json({ account: newAccount });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to add account",
      details: error instanceof Error ? error.message : String(error),
    });
  }
};

export const updateAccount = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  try {
    const user = req.user;

    if (!user || typeof user.id !== "number") {
      return res
        .status(400)
        .json({ error: "User information is missing from request." });
    }

    const accountId = Number(req.params.id);

    const { name, amount } = req.body;
    const updateData: Partial<{ name: string; amount: number }> = {
      name,
      amount,
    };

    const updatedAccount = await prisma.account.update({
      where: { id: accountId, userId: user.id },
      data: updateData,
    });

    return res.status(200).json({ account: updatedAccount });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to update account",
      details: error instanceof Error ? error.message : String(error),
    });
  }
};
