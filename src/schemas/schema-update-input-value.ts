import z from "zod";

export const SachemaUpdateInputValeu = z.object({
  data: z.date(),
  valor: z.number().min(1, "você precisar inserir um valor maior do que 0,10"),
});

export type DTOUpdateInputValue = z.infer<typeof SachemaUpdateInputValeu>;
