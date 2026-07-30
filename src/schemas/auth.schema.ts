import { number, z } from "zod";

export const LoginResponseSchema = z.object({
  token: z.string().min(1),
  userId: z.string(),
  message: z.string(),
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
