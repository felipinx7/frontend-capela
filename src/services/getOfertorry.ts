import { api } from "../config/axios.config";

export async function GetOfertorry() {
  try {
    const response = await api.get("/ofertorio/pegar-todos");
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error ao pegar os dados", error);
  }
}
