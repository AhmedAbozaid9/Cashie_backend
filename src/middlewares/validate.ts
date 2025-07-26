import { NextFunction, Request, Response } from "express";
import { flattenError, type ZodType } from "zod";

export const validate =
  <T>(schema: ZodType<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        message: "Validation error",
        errors: flattenError(result.error).fieldErrors,
      });
    }
    next();
    return;
  };
