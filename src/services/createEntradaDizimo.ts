import { api } from "../config/axios.config";
import { DTOAddedValue } from "../schemas/schema-added-valeu";

export async function CreateEntradaDizimo(data: DTOAddedValue) {
  try {
    const response = await api.post("/entrada-dizimo/criar", data);
    return response;
  } catch (error) {
    console.log("Error ao criar", error);
  }
}
