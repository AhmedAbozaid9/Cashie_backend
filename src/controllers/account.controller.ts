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
