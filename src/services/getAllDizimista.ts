import { api } from "../config/axios.config";

export async function GetAllDizimista() {
  try {
    const response = await api.get("/dizimista/pegar-todos");
    return response;
  } catch (error) {
    console.log("Error ao pegar os dizimistas", error);
  }
}
