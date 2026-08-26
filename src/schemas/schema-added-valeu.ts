import z from "zod";

export const schemaAddedValue = z.object({
  idCapela: z.string().optional(),
  idDizimista: z.string().optional(),
  valor: z.number().min(0, "O valor precisa ser maior do que zero"),
  data: z.date(),
});

export type DTOAddedValue = z.infer<typeof schemaAddedValue>;
