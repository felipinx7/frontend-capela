import z from "zod";

export const SchemaDizimistaUpdate = z.object({
  nome: z.string().min(4, "o nome do dizimista precisar ter mais do que 8 caracteres!!"),
  id: z.string().min(1, "você precisa fornecer o ID").optional(),
});

export type DTODizimistaUpdate = z.infer<typeof SchemaDizimistaUpdate>;
