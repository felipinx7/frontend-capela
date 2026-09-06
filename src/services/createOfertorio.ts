import { api } from "../config/axios.config";
import { DTOOfertorio } from "../schemas/schema-ofertorio";

export async function CreateOfertorio(data: DTOOfertorio & { idCapela: string; idUsuario: string }) {
  try {
    return await api.post("/ofertorio/criar", data);
  } catch (error) {
    console.log("Erro ao criar ofertório", error);
  }
}
