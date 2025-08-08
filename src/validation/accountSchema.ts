import { z } from "zod";

export const accountUpdateSchema = z
  .object({
    name: z
      .string("Name must be a string")
      .min(1, "Name is required")
      .optional(),
    amount: z
      .number("Amount must be a number")
      .refine((val) => typeof val === "number" && !isNaN(val), {
        message: "Amount must be a number.",
      })
      .optional(),
  })
  .refine((data) => data.name !== undefined || data.amount !== undefined, {
    message: "At least one of name or amount is required.",
    path: [],
  });

export const accountSchema = z.object({
  name: z.string("Name is required").min(1, "Name is required"),
  amount: z
    .number("Amount is required")
    .refine((val) => typeof val === "number" && !isNaN(val), {
      message: "Amount must be a number.",
    }),
});
