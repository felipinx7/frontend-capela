import IconAddPeople from "@/src/assets/icons/icon-add-people";
import IconSearch from "@/src/assets/icons/icon-search";
import { PhotoDefaultResultFromSearch } from "@/src/assets/image";
import { ModalCreationUsuario } from "@/src/components/layout/modal-creation-usuario";
import { CardUsuario } from "@/src/components/ui/card-usuario";
import { Usuario } from "@/src/interfaces/user/interface-user";
import { GetAllUsuario } from "@/src/services/getAllUsuario";
import { useEffect, useState } from "react";

export function SectionUsersCapela({ idCapela }: { idCapela?: string }) {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [valueInput, setValueInput] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const usuariosFiltered = usuarios.filter((usuario) => usuario.nome.toLocaleUpperCase().includes(valueInput.toLocaleUpperCase()))

    useEffect(() => {
        if (!idCapela) return

        let active = true

        async function fetchUsuarios() {
            const response = await GetAllUsuario()
            const responseData = response?.data
            const data = Array.isArray(responseData)
                ? responseData
                : Array.isArray(responseData?.data)
                    ? responseData.data
                    : Array.isArray(responseData?.usuarios)
                        ? responseData.usuarios
                        : Array.isArray(responseData?.data?.usuarios)
                            ? responseData.data.usuarios
                            : []
            if (active) setUsuarios(data)
        }
        fetchUsuarios()

        return () => {
            active = false
        }
    }, [idCapela])

    function updateUsuario(usuario: Usuario) {
        setUsuarios((prev) => prev.map((item) => item.id === usuario.id ? usuario : item))
    }

    function deleteUsuario(id: string) {
        setUsuarios((prev) => prev.filter((usuario) => usuario.id !== id))
    }

    async function refreshUsuarios() {
        const response = await GetAllUsuario()
        const responseData = response?.data
        const data = Array.isArray(responseData)
            ? responseData
            : Array.isArray(responseData?.data)
                ? responseData.data
                : Array.isArray(responseData?.usuarios)
                    ? responseData.usuarios
                    : Array.isArray(responseData?.data?.usuarios)
                        ? responseData.data.usuarios
                        : []
        setUsuarios(data)
    }

    return (
        <section className="style-sections-dashboard gap-4">
            <div className="flex flex-col">
                <h3 className="font-semibold text-primary-100 text-[1.5rem]">Administração Usuários</h3>
                <p className="text-primary-100 font-normal text-[0.9rem]">Registre todos os usuários</p>
            </div>
            <div className="flex items-center justify-between max-lg:flex-col max-lg:items-start gap-4 mb-4">
                <div className="relative w-full">
                    <input value={valueInput} onChange={(e) => setValueInput(e.target.value)} type="text" className="p-2.5 outline-none focus:shadow-lg text-primary-100 focus:border-primary-100 w-[50%] max-lg:w-full pl-10 placeholder:text-primary-100 font-light placeholder:text-[0.8rem] text-[0.8rem] border-2 rounded-full border-gray-500" placeholder="Pesquise o usuário pelo nome..." />
                    <IconSearch className="absolute w-4 top-1/3 text-primary-100 left-3" />
                </div>
                <button onClick={() => setOpenModal(true)} className="flex cursor-pointer flex-row-reverse text-white h-auto p-2 rounded-[2.1rem] w-auto font-bold text-[0.7rem] text-nowrap items-center bg-primary-100 justify-start pr-3 gap-3">
                    Adicionar Usuário
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"><IconAddPeople className="w-4 text-primary-100" /></div>
                </button>
            </div>
            <div className="flex overflow-auto h-[45vh] max-lg:h-screen w-full flex-col gap-2">
                {usuariosFiltered.length > 0 ? usuariosFiltered.map((usuario) => <CardUsuario key={usuario.id} usuario={usuario} onUpdated={updateUsuario} onDeleted={deleteUsuario} />) : (
                    <div className="flex items-center justify-center h-screen w-full flex-col"><img src={PhotoDefaultResultFromSearch.src} alt="" /><p className="text-primary-100">Nenhum Usuário Encontrado</p></div>
                )}
            </div>
            {idCapela && <ModalCreationUsuario idCapela={idCapela} onCreated={refreshUsuarios} onClose={() => setOpenModal(false)} open={openModal} />}
        </section>
    )
}
