import { z } from "zod";

export const SchemaUsuario = z.object({
  nome: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres"),
  email: z.string().email("Digite um email válido"),
  senha: z.string().min(8, "A senha precisa conter 8 caracteres"),
  tipoUsuario: z.enum(["ADMINISTRADOR", "USUARIO"]),
});

export const SchemaUsuarioUpdate = SchemaUsuario.omit({ senha: true });

export type DTOUsuario = z.infer<typeof SchemaUsuario>;
export type DTOUsuarioUpdate = z.infer<typeof SchemaUsuarioUpdate>;
