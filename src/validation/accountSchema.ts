import { z } from "zod";

export const accountSchema = z.object({
  name: z.string("Name is required").min(1, "Name is required"),
  amount: z
    .number("Amount is required")
    .refine((val) => typeof val === "number" && !isNaN(val), {
      message: "Amount must be a number.",
    }),
});
