import { api } from "../config/axios.config";

export async function getAllSpentValue() {
  try {
    const response = await api.get("/gastos-capela/pegar-todos");
    return response;
  } catch (error) {
    console.log("Error ao pegar os gastos", error);
  }
}
