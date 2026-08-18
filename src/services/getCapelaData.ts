import { api } from "../config/axios.config";

export async function GetCapelaDados() {
  try {
    const {data } = await api.get("/capela/dados-capela");
    console.log(data);
    return data
  } catch (error) {
    console.log("Error ao pegar os dados", error);
  }
}
