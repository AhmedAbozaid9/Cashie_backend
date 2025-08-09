// src/middlewares/notFound.ts
import type { Request, Response } from "express";

export function notFound(req: Request, res: Response): void {
  res.status(404).json({
    error: "Not Found",
    path: req.originalUrl,
  });
}
