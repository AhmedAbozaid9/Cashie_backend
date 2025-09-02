import type { AuthenticatedRequest } from "../middlewares/auth";
import type { Response } from "express";

export const getCategories = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  // Your logic to get categories
  return res.json({ message: "Get categories" });
};
