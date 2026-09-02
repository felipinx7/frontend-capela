import { api } from "../config/axios.config";
import { DTOUsuario } from "../schemas/schema-usuario";

type DTOCriarUsuario = Omit<DTOUsuario, "tipoUsuario"> & {
  idCapela: string;
  TipoUsuario: DTOUsuario["tipoUsuario"];
};

export async function CreateUsuario(data: DTOCriarUsuario) {
  try {
    return await api.post("/usuario/criar", data);
  } catch (error) {
    console.log("Erro ao criar usuário", error);
  }
}
