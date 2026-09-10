"use client"

import { SideBarDashboard } from "@/src/components/layout/sideBar"
import { linksDashboardCapela } from "@/src/constants/links-dashboard"
import { InterfaceDataPorfileDashboard } from "@/src/interfaces/user/interface-data-porfile-dashboard"
import { Usuario } from "@/src/interfaces/user/interface-user"
import { GetAllUsuario } from "@/src/services/getAllUsuario"
import { GetCapelaDados } from "@/src/services/getCapelaData"
import { TypeSectionDashboardCapela } from "@/src/types/type-sections-dashboard"
import { JSX, useEffect, useState } from "react"
import { SectionDashboardCapela } from "./sections/dashboard"
import { SectionDizimoCapela } from "./sections/dizimo"
import { SectionOfertorryoCapela } from "./sections/ofetorry"
import { SectionPorfileCapela } from "./sections/porfile"
import { SectionRelatorioCapela } from "./sections/relatorio"
import { SectionUsersCapela } from "./sections/users"

export function DashboardCapela() {
    const [dadosCapela, setDadosCapela] = useState<InterfaceDataPorfileDashboard>()
    const [nameSection, setNameSection] = useState<TypeSectionDashboardCapela>("DASHBOARD")

    useEffect(() => {
        async function FetchDataCapela() {
            const { data } = await GetCapelaDados()
            const responseUsers = await GetAllUsuario()
            const usersData = responseUsers?.data
            const usuarios: Usuario[] = Array.isArray(usersData)
                ? usersData
                : Array.isArray(usersData?.data)
                    ? usersData.data
                    : Array.isArray(usersData?.data?.data)
                        ? usersData.data.data
                        : Array.isArray(usersData?.usuarios)
                            ? usersData.usuarios
                            : []
            const nomeAtual = String(data[0]).trim().toLocaleUpperCase()
            const usuarioAtual = usuarios.find((usuario) => String(usuario.nome).trim().toLocaleUpperCase() === nomeAtual && usuario.idCapela === data[2])
                ?? usuarios.find((usuario) => usuario.idCapela === data[2])
            setDadosCapela({ nome: data[0], typeUser: data[1], idCapela: data[2], idUsuario: usuarioAtual?.id ?? data[3] })
        }
        FetchDataCapela()
    }, [])


    function logout() {
        return ["hello word"];
    }

    function handleSection(name: TypeSectionDashboardCapela) {
        setNameSection(name)
    }

    const sectionsRender: Record<TypeSectionDashboardCapela, JSX.Element> = {
        DASHBOARD: <SectionDashboardCapela />,
        DIZIMO: <SectionDizimoCapela idCapela={dadosCapela?.idCapela} />,
        OFERTORIO: <SectionOfertorryoCapela idCapela={dadosCapela?.idCapela} idUsuario={dadosCapela?.idUsuario} />,
        PERFIL: <SectionPorfileCapela />,
        RELATORIO: <SectionRelatorioCapela />,
        USUARIOS: <SectionUsersCapela idCapela={dadosCapela?.idCapela} />,
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