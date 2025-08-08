import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  password: z
    .string("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});
