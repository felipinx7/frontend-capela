import { api } from "../config/axios.config";
import { PickModalAddedValueDizimista } from "../types/picks/pick-modal-added-value-dizimista";

export async function updateInputDizimo(id: string, data: PickModalAddedValueDizimista) {
  try {
    const response = await api.put(`/entrada-dizimo/atualizar/${id}`, data);
    return response;
  } catch (error) {
    console.log("Error ao atualizar", error);
  }
}
