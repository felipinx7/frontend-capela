import IconPencil from "@/src/assets/icons/icon-pencil"
import IconTrash from "@/src/assets/icons/icon-trash"
import { DTOUpdateInputValue } from "@/src/schemas/schema-update-input-value"
import { handleStateValeu } from "@/src/utils/handleStateValue"
import { useState } from "react"
import { ModalDeleteInputValeu } from "../layout/modal-delete-input-value"
import { ModalUpdateDizimo } from "../layout/modal-update-dizimo"

interface InterfaceCardViewValueDizimista {
    deleteInputDizimo: () => void
    updateInputDizimo: (data: DTOUpdateInputValue) => void
    openModalDeleteInputDizimo: boolean,
    onDeleteInput: (id: string) => void,
    handleOpenModalDeleteInputDizimo: () => void
    hadleOpenModalInputDizimo: () => void,
    valueMonth: string,
    valueDizimo: number,
    idInputDizimo: string,
    confirmDeleteInputValeuDizimo: boolean,
}

export function CardViewValueDizimista(props: InterfaceCardViewValueDizimista) {

    const [openModalUpdateInputDizimo, setOpenModalUpdateInputDizimo] = useState(false)
    const [openModalDeleteInputDizimo, setOpenModalDeleteInputDizimo] = useState(false)

    return (
        <article className="w-full flex items-center p-2 border-2 border-primary-100 rounded-[0.4rem] justify-between">
            <p className="font-satoshi font-medium text-primary-100 text-[0.8rem]">{props.valueMonth.toUpperCase()}</p>

            <div className="flex items-center justify-center gap-2">
                <p className="font-satoshi font-medium text-primary-100 text-[0.8rem]">{String(Number(props.valueDizimo).toFixed(2)).replace(".", ",")} R$</p>
                <div className="flex items-center justify-center gap-2">
                    <button onClick={() => handleStateValeu(setOpenModalUpdateInputDizimo)} className="w-6 h-6 flex hover:bg-primary-100/90 cursor-pointer items-center justify-center rounded-[5.97px] bg-primary-100"><IconPencil className="w-3 text-white" /></button>
                    <button onClick={props.handleOpenModalDeleteInputDizimo} className="w-6 h-6 flex hover:bg-[#EF4444]/90 cursor-pointer items-center justify-center rounded-[5.97px] bg-[#EF4444]"><IconTrash className="w-3 text-white" /></button>
                </div>
            </div>

            {/* modals utils in component*/}
            <ModalUpdateDizimo
                updateDataDizimista={props.updateInputDizimo}
                OpenModalView={openModalUpdateInputDizimo}
                openModalDeleteInputDizimo={props.openModalDeleteInputDizimo}
                handleOpenModalDeleteInputDizimo={props.hadleOpenModalInputDizimo}
                id={props.idInputDizimo}
                handleOpenModal={() => handleStateValeu(setOpenModalUpdateInputDizimo)}
            />

            <ModalDeleteInputValeu
                onDeleteInput={props.onDeleteInput}
                id={props.idInputDizimo}
                OpenModal={props.openModalDeleteInputDizimo}
                handleOpenModal={props.handleOpenModalDeleteInputDizimo}
            />

        </article>
    )
}