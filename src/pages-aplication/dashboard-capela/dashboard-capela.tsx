"use client"

import { SideBarDashboard } from "@/src/components/sideBar"
import { linksDashboardCapela } from "@/src/constants/links-dashboard"
import { InterfaceDataCapela } from "@/src/interfaces/interface-data-capela"
import { GetCapelaDados } from "@/src/services/getCapelaData"
import { TypeSectionDashboardCapela } from "@/src/types/type-sections-dashboard"
import { useEffect, useState } from "react"
import { SectionDashboardCapela } from "./sections/dashboard"
import { SectionDizimoCapela } from "./sections/dizimo"
import { SectionOfertorryoCapela } from "./sections/ofetorry"
import { SectionPorfileCapela } from "./sections/porfile"
import { SectionRelatorioCapela } from "./sections/relatorio"
import { SectionUsersCapela } from "./sections/users"

export function DashboardCapela() {
    const [dadosCapela, setDadosCapela] = useState<InterfaceDataCapela>()
    const [nameSection, setNameSection] = useState<TypeSectionDashboardCapela>("DASHBOARD")
    const sectionsRender: Record<TypeSectionDashboardCapela, any> = {
        DASHBOARD: <SectionDashboardCapela />,
        DIZIMO: <SectionDizimoCapela />,
        OFERTORIO: <SectionOfertorryoCapela />,
        PERFIL: <SectionPorfileCapela />,
        RELATORIO: <SectionRelatorioCapela />,
        USUARIOS: <SectionUsersCapela />,
    }

    useEffect(() => {
        async function FetchDadosCapela() {
            const { data } = await GetCapelaDados()
            setDadosCapela({ name: data[0], typeUsuario: data[1] })
            return data
        }
        FetchDadosCapela()
    },
        [])


    function logout() {
        return ["hello word"];
    }

    function handleSection(name: TypeSectionDashboardCapela) {
        setNameSection(name)
    }


    console.log(dadosCapela);
    return (
        <section className="w-full flex items-center justify-start gap-4">
            <SideBarDashboard
                functionLogout={logout}
                handleSection={handleSection}
                nameUser={dadosCapela?.name as string}
                sectionsLinks={linksDashboardCapela}
                typeUser={dadosCapela?.typeUsuario as string}
                nameSection={nameSection}
            />

            <section className="w-[73%] bg-[#F7F6FB] h-[93vh] overflow-y-auto">{sectionsRender[nameSection]}</section>

        </section>

    )
}