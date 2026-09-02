import { api } from "../config/axios.config";
import { DTOUsuarioUpdate } from "../schemas/schema-usuario";

export async function UpdateUsuario(id: string, data: DTOUsuarioUpdate) {
  try {
    return await api.put(`/usuario/atualizar/${id}`, data);
  } catch (error) {
    console.log("Erro ao atualizar usuário", error);
  }
}
