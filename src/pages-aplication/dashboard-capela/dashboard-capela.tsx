"use client"

import { InterfaceDataCapela } from "@/src/interfaces/interface-data-capela"
import { GetCapelaDados } from "@/src/services/getCapelaData"
import { useEffect, useState } from "react"

export function DashboardCapela() {
    const [dadosCapela, setDadosCapela] = useState<InterfaceDataCapela>()
    useEffect(() => {
        async function FetchDadosCapela() {
            const {data} = await GetCapelaDados()
            console.log("DADOS DO USUÁRIO: ",data)
            setDadosCapela({ name: data[0], typeUsuario: data[1] })
            return data       }
        
        FetchDadosCapela()
    }, [])


    console.log(dadosCapela);
    return (
        <div>
            <h1>{dadosCapela?.name}</h1>
            <h1>{dadosCapela?.typeUsuario}</h1>
        </div>

    )
}