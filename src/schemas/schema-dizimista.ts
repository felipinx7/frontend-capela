import z from "zod";

export const SchemaDizimista = z.object({
  idCapela: z.string().optional(),
  nome: z.string().min(4, "o nome do dizimista precisar ter mais do que 8 caracteres!!").optional(),
});

export type DTODizimista = z.infer<typeof SchemaDizimista>;
