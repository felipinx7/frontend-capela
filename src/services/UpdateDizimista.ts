import { api } from "../config/axios.config";
import { DTODizimistaUpdate } from "../schemas/schema-dizimista-update";

export async function UpdateDizimista(data: DTODizimistaUpdate) {
  try {
    const response = await api.put("/dizimista/atualizar", data);
    console.log("VALOR DA RESPONSE", response)
    return response;
  } catch (error) {
    console.log("Error ao atualizar os dados", error);
  }
}
