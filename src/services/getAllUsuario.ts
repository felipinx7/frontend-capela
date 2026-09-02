import { api } from "../config/axios.config";

export async function GetAllUsuario() {
  try {
    return await api.get("/usuario/pegar-todos");
  } catch (error) {
    console.log("Erro ao buscar usuários", error);
  }
}
