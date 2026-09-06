import { api } from "../config/axios.config";

export async function DeleteOfertorio(id: string) {
  try {
    return await api.delete("/ofertorio/deletar", { data: { id } });
  } catch (error) {
    console.log("Erro ao deletar ofertório", error);
  }
}
