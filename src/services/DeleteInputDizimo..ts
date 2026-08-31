import { api } from "../config/axios.config";

export async function DeleteInputDizimo(id: string) {
  try {
    const response = await api.delete(`/entrada-dizimo/deletar/${id}`);
    return response;
  } catch (error) {
    console.log("Error ao excluir a entrada do dizimo", error);
  }
}
