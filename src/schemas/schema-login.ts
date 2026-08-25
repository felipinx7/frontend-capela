import { z } from "zod";

export const SchemaLogin = z.object({
  email: z.string().min(3, "email inválido"),
  senha: z.string().min(8, "a senha precisa conter 8 caracteres"),
});

export type DTOLogin = z.infer<typeof SchemaLogin>;
