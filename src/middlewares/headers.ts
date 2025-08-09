import type { Request, Response, NextFunction } from "express";

export const headersMiddleware = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.setHeader("X-Powered-By", "Cashie-API");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  if (_req.method === "OPTIONS") {
    res.status(204).end();

    return;
  }
  next();
};
