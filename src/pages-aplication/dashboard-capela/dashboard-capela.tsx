"use client"

import { SideBarDashboard } from "@/src/components/layout/sideBar"
import { linksDashboardCapela } from "@/src/constants/links-dashboard"
import { GetCapelaDados } from "@/src/services/getCapelaData"
import { TypeSectionDashboardCapela } from "@/src/types/type-sections-dashboard"
import { JSX, useEffect, useState } from "react"
import { SectionDashboardCapela } from "./sections/dashboard"
import { SectionDizimoCapela } from "./sections/dizimo"
import { SectionOfertorryoCapela } from "./sections/ofetorry"
import { SectionPorfileCapela } from "./sections/porfile"
import { SectionRelatorioCapela } from "./sections/relatorio"
import { SectionUsersCapela } from "./sections/users"
import { InterfaceDataPorfileDashboard } from "@/src/interfaces/user/interface-data-porfile-dashboard"

export function DashboardCapela() {
    const [dadosCapela, setDadosCapela] = useState<InterfaceDataPorfileDashboard>()
    const [nameSection, setNameSection] = useState<TypeSectionDashboardCapela>("DASHBOARD")
    const sectionsRender: Record<TypeSectionDashboardCapela, JSX.Element> = {
        DASHBOARD: <SectionDashboardCapela />,
        DIZIMO: <SectionDizimoCapela idCapela={dadosCapela?.idCapela} />,
        OFERTORIO: <SectionOfertorryoCapela />,
        PERFIL: <SectionPorfileCapela />,
        RELATORIO: <SectionRelatorioCapela />,
        USUARIOS: <SectionUsersCapela />,
    }

    useEffect(() => {
        async function FetchDataCapela() {
            const { data } = await GetCapelaDados()
            setDadosCapela({ nome: data[0], typeUser: data[1], idCapela: data[2]})
        }
        FetchDataCapela()
    }, [])


    function logout() {
        return ["hello word"];
    }

    function handleSection(name: TypeSectionDashboardCapela) {
        setNameSection(name)
    }


    return (
        <section className="w-full flex items-center h-screen max-lg:flex-col-reverse justify-start gap-4">
            <SideBarDashboard
                functionLogout={logout}
                handleSection={handleSection}
                nameUser={dadosCapela?.nome}
                sectionsLinks={linksDashboardCapela}
                typeUser={dadosCapela?.typeUser}
                nameSection={nameSection}
            />

            <section className="w-[73%] max-lg:w-full bg-[#F7F6FB] h-[93vh] max-lg:h-[100vh] overflow-y-auto">{sectionsRender[nameSection]}</section>

        </section>

    )
}