import { api } from "../config/axios.config";

export async function GetUniqueDizimista(id: string){
    try {
        const response = await api.get(`/dizimista/pegar/${id}`)
        return response
    } catch (error) {
    console.log("Error ao pegar os dados", error);
    
    }
}