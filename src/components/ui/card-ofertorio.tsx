import IconPencil from "@/src/assets/icons/icon-pencil";
import IconTrash from "@/src/assets/icons/icon-trash";
import { Ofertorio } from "@/src/interfaces/ofertorio/interface-ofertorio";
import { useState } from "react";
import { ModalDeleteOfertorio } from "../layout/modal-delete-ofertorio";
import { ModalUpdateOfertorio } from "../layout/modal-update-ofertorio";

interface Props { ofertorio: Ofertorio; onUpdated: (item: Ofertorio) => void; onDeleted: (id: string) => void }

export function CardOfertorio({ ofertorio, onUpdated, onDeleted }: Props) {
    const [updateOpen, setUpdateOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const date = new Date(ofertorio.data).toLocaleDateString("pt-BR")
    return <article className="flex flex-col items-start rounded-lg bg-white border-2 border-primary-100 py-3 px-4 justify-between w-full gap-1">
        <h4 className="text-primary-100 text-[0.9rem] font-bold">VALOR OFERTÓRIO: R$ {Number(ofertorio.valor).toFixed(2).replace(".", ",")}</h4>
        <p className="text-primary-100 text-[0.75rem] font-semibold">Data do ofertório: <span className="font-normal">{date}</span></p>
        <p className="text-primary-100 text-[0.75rem] font-semibold">Descrição:</p>
        <p className="text-primary-100 text-[0.7rem]">{ofertorio.descricao || "Sem descrição"}</p>
        <div className="flex items-center gap-2 mt-1"><button onClick={() => setUpdateOpen(true)} className="flex items-center gap-1 bg-primary-100 text-white rounded-md px-2 py-1 text-[0.7rem] cursor-pointer"><IconPencil className="w-3" />Editar</button><button onClick={() => setDeleteOpen(true)} className="flex items-center gap-1 bg-[#EF4444] text-white rounded-md px-2 py-1 text-[0.7rem] cursor-pointer"><IconTrash className="w-3" />Excluir</button></div>
        <ModalUpdateOfertorio ofertorio={ofertorio} onUpdated={onUpdated} onClose={() => setUpdateOpen(false)} open={updateOpen} /><ModalDeleteOfertorio id={ofertorio.id} onDeleted={onDeleted} onClose={() => setDeleteOpen(false)} open={deleteOpen} />
    </article>
}
