import z from "zod";
import { id } from "zod/locales";

export const NewUserSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(2).max(100),
});

export type NewUserInput = z.infer<typeof NewUserSchema>;
