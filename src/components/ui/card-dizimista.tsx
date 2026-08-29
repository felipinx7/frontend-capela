import IconDelete from "@/src/assets/icons/icon-delete";
import IconEye from "@/src/assets/icons/icon-eye";
import IconMoney from "@/src/assets/icons/icon-money";
import IconPencil from "@/src/assets/icons/icon-pencil";
import { PhotoUserDefault } from "@/src/assets/image";
import { InterfaceCardDizimista } from "@/src/interfaces/interface-card-dizimista";
import { handleStateValeu } from "@/src/utils/handleStateValue";
import { useState } from "react";
import { ModalAddedDizimista } from "../layout/modal-added-dizimista";
import { ModalUpdateDizimista } from "../layout/modal-update-dizimista";
import { ModalViewDizimista } from "../layout/modal-view-dizimista";

export function CardDizimista(props: InterfaceCardDizimista) {
    // States used in component.
    const [openMoldaUpdate, setOpenModalUpdate] = useState(false)
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [openModalView, setOpenModalView] = useState(false)
    const [openModalAddedMoney, setOpenModalAddedMoney] = useState(false)

    console.log("VALOR DO ESTADO NO CARD DIZIMO", props.openModalDeleteInputDizimo);


    return (
        <article className="flex items-center rounded-2xl bg-white border-2 border-primary-100 py-2 px-4 justify-between w-full">
            <div className="flex items-center justify-center gap-4">
                <img src={PhotoUserDefault.src} alt="" />

                <div className="flex flex-col items-start justify-center">
                    <h4 className="text-primary-100 text-[0.9rem] font-bold">{props.nome}</h4>
                    <p className="font-normal text-[0.8rem] text-primary-100">Dizimista</p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-2">
                <button onClick={() => handleStateValeu(setOpenModalUpdate)} className="w-6 h-6 cursor-pointer hover:bg-primary-100/80 bg-primary-100 rounded-[5.25px] flex items-center justify-center"><IconPencil className="w-3 text-white" /></button>
                <button onClick={() => handleStateValeu(setOpenModalAddedMoney)} className="w-6 h-6 cursor-pointer hover:bg-primary-100/80 bg-primary-100 rounded-[5.25px] flex items-center justify-center"><IconMoney className="w-3 text-white" /></button>
                <button onClick={() => handleStateValeu(setOpenModalView)} className="w-6 h-6 cursor-pointer hover:bg-[#FACC15]/80 bg-[#FACC15] rounded-[5.25px] flex items-center justify-center"><IconEye className="w-3 text-white" /></button>
                <button onClick={() => handleStateValeu(setOpenModalDelete)} className="w-6 h-6 cursor-pointer hover:bg-[#EF4444]/80 bg-[#EF4444] rounded-[5.25px] flex items-center justify-center"><IconDelete className="w-3 text-white" /></button>
            </div>

            {/* Modals utils in card  */}
            <ModalUpdateDizimista OpenModal={openMoldaUpdate} id={props.id} updateDizimista={props.UpdateDizimista} handleOpenModal={() => handleStateValeu(setOpenModalUpdate)} />
            <ModalAddedDizimista onClosed={openModalAddedMoney} handleOpenModal={() => handleStateValeu(setOpenModalAddedMoney)} idDizimista={props.id as string} idCapela={props.idCapela as string} />
            <ModalViewDizimista handleOpenModalDeleteInputDizimo={props.handleOpenModalDeleteInputDizimo ?? (() => { })} openModalDeleteInputDizimo={props.openModalDeleteInputDizimo} OpenModalView={openModalView} id={props.id} handleOpenModal={() => handleStateValeu(setOpenModalView)} />

        </article>
    )
}