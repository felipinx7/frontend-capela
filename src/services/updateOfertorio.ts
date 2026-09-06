import { api } from "../config/axios.config";
import { DTOOfertorio } from "../schemas/schema-ofertorio";

export async function UpdateOfertorio(id: string, data: Partial<DTOOfertorio>) {
  try {
    return await api.put("/ofertorio/atualizar", { id, ...data });
  } catch (error) {
    console.log("Erro ao atualizar ofertório", error);
  }
}
