import IconDelete from "@/src/assets/icons/icon-delete";
import IconEye from "@/src/assets/icons/icon-eye";
import IconPencil from "@/src/assets/icons/icon-pencil";
import { PhotoUserDefault } from "@/src/assets/image";
import { Usuario } from "@/src/interfaces/user/interface-user";
import { useState } from "react";
import { ModalDeleteUsuario } from "../layout/modal-delete-usuario";
import { ModalUpdateUsuario } from "../layout/modal-update-usuario";
import { ModalViewUsuario } from "../layout/modal-view-usuario";

interface Props {
    usuario: Usuario
    onUpdated: (usuario: Usuario) => void
    onDeleted: (id: string) => void
}

export function CardUsuario({ usuario, onUpdated, onDeleted }: Props) {
    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [openModalView, setOpenModalView] = useState(false)


    return (
        <article className="flex items-center rounded-2xl bg-white border-2 border-primary-100 py-2 px-4 justify-between w-full">
            <div className="flex items-center justify-center gap-4">
                <img src={PhotoUserDefault.src} alt="" />

                <div className="flex flex-col items-start justify-center">
                    <h4 className="text-primary-100 text-[0.9rem] font-bold">{usuario.nome}</h4>
                    <p className="font-normal text-[0.8rem] text-primary-100">{usuario.tipoUsuario}</p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-3">
                <button onClick={() => setOpenModalUpdate(true)} className="w-6 h-6 cursor-pointer hover:bg-primary-100/80 bg-primary-100 rounded-[5.25px] flex items-center justify-center"><IconPencil className="w-3 text-white" /></button>
                <button onClick={() => setOpenModalView(true)} className="w-6 h-6 cursor-pointer hover:bg-[#FACC15]/80 bg-[#FACC15] rounded-[5.25px] flex items-center justify-center"><IconEye className="w-3 text-white" /></button>
                <button onClick={() => setOpenModalDelete(true)} className="w-6 h-6 cursor-pointer hover:bg-[#EF4444]/80 bg-[#EF4444] rounded-[5.25px] flex items-center justify-center"><IconDelete className="w-3 text-white" /></button>
            </div>

            <ModalUpdateUsuario usuario={usuario} onUpdated={onUpdated} onClose={() => setOpenModalUpdate(false)} open={openModalUpdate} />
            <ModalViewUsuario usuario={usuario} onClose={() => setOpenModalView(false)} open={openModalView} />
            <ModalDeleteUsuario id={usuario.id} onDeleted={onDeleted} onClose={() => setOpenModalDelete(false)} open={openModalDelete} />
        </article>
    )
}