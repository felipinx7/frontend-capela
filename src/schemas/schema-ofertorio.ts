import { z } from "zod";

export const SchemaOfertorio = z.object({
  valor: z.number().positive("O valor deve ser maior que zero"),
  data: z.string().min(1, "Informe a data"),
  descricao: z.string().optional(),
});

export type DTOOfertorio = z.infer<typeof SchemaOfertorio>;
