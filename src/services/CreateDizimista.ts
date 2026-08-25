import { api } from "../config/axios.config";
import { DTODizimista } from "../schemas/schema-dizimista";

export async function CreateDizimista(data: DTODizimista) {
  try {
    const response = await api.post("/dizimista/criar", data);
    return response;
  } catch (error) {
    console.log("Error ao criar", error);
  }
}
