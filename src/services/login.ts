import toast from "react-hot-toast";
import { api } from "../config/axios.config";
import { DTOLogin } from "../schemas/schema-login";

export async function Login(info: DTOLogin) {
  try {
    const response = await api.post("/login", info);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    return console.log("Error ao logar", error);
  }
}
