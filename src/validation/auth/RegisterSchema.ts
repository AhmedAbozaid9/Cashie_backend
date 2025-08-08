import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string("Name is required").min(1, "Name is required"),
    email: z
      .email("Please enter a valid email address")
      .min(1, "Email is required"),
    password: z
      .string("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    passwordConfirmation: z
      .string("Password confirmation is required")
      .min(8, "Password confirmation must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });
