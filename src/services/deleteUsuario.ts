import { api } from "../config/axios.config";

export async function DeleteUsuario(id: string) {
  try {
    return await api.delete(`/usuario/deletar/${id}`);
  } catch (error) {
    console.log("Erro ao deletar usuário", error);
  }
}
