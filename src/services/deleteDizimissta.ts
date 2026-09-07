import { api } from "../config/axios.config";

export async function DeleteDizimista(id: string) {
  try {
    const response = await api.delete(`/dizimista/deletar/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error ao excluir o dizimista", error);
  }
}
