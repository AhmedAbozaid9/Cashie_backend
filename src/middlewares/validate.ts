import type { NextFunction } from "express";
import type { Request } from "express";
import type { Response } from "express";
import type { ZodType } from "zod";

export const validate =
  <T>(schema: ZodType<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    // Handle case where body is undefined
    const body = req.body || {};

    const result = schema.safeParse(body);

    if (!result.success) {
      const fieldErrors: Record<string, string[]> = {};

      result.error.issues.forEach((issue) => {
        const path = issue.path.length > 0 ? issue.path.join(".") : "root";

        if (!fieldErrors[path]) {
          fieldErrors[path] = [];
        }

        fieldErrors[path].push(issue.message);
      });

      res.status(400).json({
        message: "Validation error",
        errors: fieldErrors,
      });

      return;
    }

    next();
  };
