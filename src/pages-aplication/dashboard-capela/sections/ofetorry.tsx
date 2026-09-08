import IconAddPeople from "@/src/assets/icons/icon-add-people";
import { PhotoDefaultResultFromSearch } from "@/src/assets/image";
import { ModalCreationOfertorio } from "@/src/components/layout/modal-creation-ofertorio";
import { CardOfertorio } from "@/src/components/ui/card-ofertorio";
import { Ofertorio } from "@/src/interfaces/ofertorio/interface-ofertorio";
import { GetOfertorry } from "@/src/services/getOfertorry";
import { useEffect, useState } from "react";

export function SectionOfertorryoCapela({ idCapela, idUsuario }: { idCapela?: string; idUsuario?: string }) {
    const [ofertorios, setOfertorios] = useState<Ofertorio[]>([])
    const [openModal, setOpenModal] = useState(false)
    const now = new Date()
    const totalValue = ofertorios.reduce((total, item) => total + Number(item.valor), 0)
    const monthlyValue = ofertorios.filter((item) => {
        const date = new Date(item.data)
        return date.getUTCMonth() === now.getMonth()
    }).reduce((total, item) => total + Number(item.valor), 0)
    const formatValue = (value: number) => value.toFixed(2).replace(".", ",")

    async function loadOfertorios() {
        const response = await GetOfertorry()
        const responseData = response?.data
        const data = Array.isArray(responseData) ? responseData : Array.isArray(responseData?.data) ? responseData.data : Array.isArray(responseData?.ofertorios) ? responseData.ofertorios : []
        setOfertorios(data)
    }

    useEffect(() => {
        if (idCapela) loadOfertorios()
    }, [idCapela])

    function updateOfertorio(item: Ofertorio) { setOfertorios((prev) => prev.map((current) => current.id === item.id ? item : current)) }
    function deleteOfertorio(id: string) { setOfertorios((prev) => prev.filter((item) => item.id !== id)) }

    return <section className="style-sections-dashboard gap-4">
        <div className="flex flex-col"><h3 className="font-semibold text-primary-100 text-[1.5rem]">Administração Ofertório</h3><p className="text-primary-100 font-normal text-[0.9rem]">Registre todas as ofertas</p></div>
        <div className="flex items-center gap-4 max-md:flex-col max-md:items-stretch w-full max-w-105 mb-1"><div className="flex flex-col items-center justify-center border-2 border-primary-100 rounded-[1.1rem] w-full h-18 shadow-md"><p className="text-primary-100 text-[0.7rem] font-bold">VALOR TOTAL</p><strong className="text-[#2D2D2D] text-[1.25rem]">R$ {formatValue(totalValue)}</strong></div><div className="flex flex-col items-center justify-center border-2 border-primary-100 rounded-[1.1rem] w-full h-18 shadow-md"><p className="text-primary-100 text-[0.7rem] font-bold">VALOR MENSAL</p><strong className="text-[#2D2D2D] text-[1.25rem]">R$ {formatValue(monthlyValue)}</strong></div></div>
        <div className="flex justify-start mb-4"><button onClick={() => setOpenModal(true)} className="flex cursor-pointer flex-row-reverse text-white p-2 rounded-[2.1rem] font-bold text-[0.7rem] items-center bg-primary-100 pr-3 gap-3">Adicionar Ofertório<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"><IconAddPeople className="w-4 text-primary-100" /></div></button></div>
        <div className={`grid overflow-y-auto max-h-[65vh] max-lg:max-h-screen w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ${ofertorios.length > 4 ? "gap-2" : "gap-3"} items-start`}>{ofertorios.length > 0 ? ofertorios.map((item) => <CardOfertorio key={item.id} ofertorio={item} onUpdated={updateOfertorio} onDeleted={deleteOfertorio} />) : <div className="col-span-full flex items-center justify-center h-60 w-full flex-col"><img src={PhotoDefaultResultFromSearch.src} alt="" /><p className="text-primary-100">Nenhum Ofertório Encontrado</p></div>}</div>
        {idCapela && <ModalCreationOfertorio idCapela={idCapela} idUsuario={idUsuario} onCreated={loadOfertorios} onClose={() => setOpenModal(false)} open={openModal} />}
    </section>
}
