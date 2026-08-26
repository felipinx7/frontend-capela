import IconPencil from "@/src/assets/icons/icon-pencil"
import IconTrash from "@/src/assets/icons/icon-trash"
import { PickDataDizimistaModalViewDizimista } from "@/src/types/picks/pick-data-dizimista-modal-view-dizimista"
import { useState } from "react"

interface InterfaceCardViewValueDizimista {
    deleteInputDizimo: () => void
    updateInputDizimo: (data: PickDataDizimistaModalViewDizimista) => void
    valueMonth: string,
    valueDizimo: number,
    idInputDizimo: string,
    confirmDeleteInputValeuDizimo: boolean
}

export function CardViewValueDizimista() {
    const [openModalUpdateInputDizimo, setOpenModalUpdateInputDizimo] = useState(false)
    const [openModalDeleteInputDizimo, setOpenModalDeleteInputDizimo] = useState(false)


    return (
        <article className="w-full flex items-center p-2 border-2 border-primary-100 rounded-[0.4rem] justify-between">
            <p className="font-satoshi font-medium text-primary-100 text-[0.8rem]">JANEIRO</p>

            <div className="flex items-center justify-center gap-2">
                <p className="font-satoshi font-medium text-primary-100 text-[0.8rem]">50,00R$</p>
                <div className="flex items-center justify-center gap-2">
                    <button className="w-6 h-6 flex hover:bg-primary-100/90 cursor-pointer items-center justify-center rounded-[5.97px] bg-primary-100"><IconPencil className="w-3 text-white" /></button>
                    <button className="w-6 h-6 flex hover:bg-[#EF4444]/90 cursor-pointer items-center justify-center rounded-[5.97px] bg-[#EF4444]"><IconTrash className="w-3 text-white" /></button>
                </div>
            </div>
        </article>
    )
}