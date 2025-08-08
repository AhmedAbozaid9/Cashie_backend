import type { Response } from "express";
import type { AuthenticatedRequest } from "../middlewares/auth";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAccounts = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  try {
    // Access authenticated user
    const user = req.user;
    // Example: filter accounts by user, or just log user
    // const accounts = await prisma.account.findMany({ where: { userId: user.id } });
    const accounts = await prisma.account.findMany();

    return res.status(200).json({ user, accounts });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to retrieve accounts",
      details: error instanceof Error ? error.message : String(error),
    });
  }
};
