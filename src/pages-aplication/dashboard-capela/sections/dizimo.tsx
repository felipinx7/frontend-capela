import IconAddPeople from "@/src/assets/icons/icon-add-people";
import IconSearch from "@/src/assets/icons/icon-search";
import { PhotoDefaultResultFromSearch } from "@/src/assets/image";
import { CardCreationDizimista } from "@/src/components/layout/modal-creation-dizimista";
import { ModalDeleteInputValeu } from "@/src/components/layout/modal-delete-input-value";
import { CardDizimista } from "@/src/components/ui/card-dizimista";
import { InterfaceDataPorfileDashboard } from "@/src/interfaces/user/interface-data-porfile-dashboard";
import { DTODizimista } from "@/src/schemas/schema-dizimista";
import { DTODizimistaUpdate } from "@/src/schemas/schema-dizimista-update";
import { GetAllDizimista } from "@/src/services/getAllDizimista";
import { handleStateValeu } from "@/src/utils/handleStateValue";
import { useEffect, useState } from "react";

export function SectionDizimoCapela({ idCapela }: DTODizimista) {
    const [dizimistas, setDizimista] = useState<InterfaceDataPorfileDashboard[]>([])
    const [openModalCreated, setOpenModalCreated] = useState(false)
    const [openModalDeleteInputDizimo, setOpenModalDeleteInputDizimo] = useState(false)
    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    const [valueInput, setValeuInput] = useState<string>("")
    const dizimistasFiltered = dizimistas.filter((dizimista) => dizimista.nome?.toLocaleUpperCase().includes(valueInput.toUpperCase()))

    function createdDizimista(dizimista: InterfaceDataPorfileDashboard) {
        setDizimista((prev) => [...prev, dizimista])
    }

    function updateDizimista(dizimistas: DTODizimistaUpdate) {
        setDizimista((prev) => prev.map((user) => (user.id === dizimistas.id ? { ...user, nome: dizimistas.nome ?? user.nome } : user)))
    }

    function handleModalUpdate() {
        setOpenModalUpdate((prev) => !prev)
    }

    function handleOpenModal() {
        setOpenModalCreated((prev) => !prev)
    }

    useEffect(() => {
        async function FetchDataDizimo() {
            const allDizimistas = await GetAllDizimista()
            setDizimista(allDizimistas?.data.data)
        }
        FetchDataDizimo()
    }, []
    )

    console.log("VALOR DO ESTADO NA SEÇÃO DIZIMO", openModalDeleteInputDizimo);
    

    return (
        <section className="style-sections-dashboard gap-4">
            <div className="flex flex-col">
                <h3 className="font-semibold text-primary-100 text-[1.5rem]">Entrada do Dízimo</h3>
                <p className="text-primary-100 font-normal text-[0.9rem]">Registre todas as receitas</p>
            </div>


            <div className="flex items-center justify-between max-lg:flex-col max-lg:items-start gap-4 mb-4">
                <div className="relative w-full">
                    <input onChange={(e) => setValeuInput(e.target.value)} type="text" className="p-2.5 duration-500 ease-in-out transition-all outline-none outline-1 focus:shadow-lg text-primary-100 focus:border-primary-100 w-[50%] max-lg:w-full pl-10 placeholder:text-primary-100 font-light placeholder:text-[0.8rem] text-[0.8rem] border-2 rounded-full border-gray-500" placeholder="Pesquise o dizimista pelo nome..." />
                    <IconSearch className="absolute w-4 top-1/3 text-primary-100 left-3" />
                </div>

                <button onClick={() => handleOpenModal()} className="flex cursor-pointer flex-row-reverse text-white h-auto p-2 rounded-[2.1rem] w-auto font-bold text-[0.7rem] text-nowrap items-center bg-primary-100 justify-start pr-3 gap-3">
                    Adicionar Dizimista
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <IconAddPeople className="w-4 text-primary-100 " />
                    </div>
                </button>
            </div>


            <div className="flex overflow-auto h-[65vh] max-lg:h-screen max w-full flex-col gap-2">
                {dizimistasFiltered.length > 0 ? dizimistasFiltered.map((dizimista) => (
                    <CardDizimista
                        UpdateDizimista={updateDizimista}
                        id={dizimista.id as string}
                        handleModaAddedMoney={handleModalUpdate}
                        handleModalDelete={handleModalUpdate}
                        idCapela={idCapela}
                        handleOpenModalDeleteInputDizimo={() => handleStateValeu(setOpenModalDeleteInputDizimo)}
                        openModalDeleteInputDizimo={openModalDeleteInputDizimo}
                        handleModalUpdate={handleModalUpdate}
                        handleModalView={handleModalUpdate}
                        key={dizimista.nome}
                        nome={dizimista.nome} />
                )) : (
                    <div className="flex items-center justify-center max-lg:justify-start h-screen w-full flex-col">
                        <img src={PhotoDefaultResultFromSearch.src} />
                        <p className="text-primary-100">Nenhum Dizimista Encontrado</p>
                    </div>
                )}
            </div>


            {/* modals used in section  */}
            <CardCreationDizimista idCapela={idCapela} createdDizimista={createdDizimista} handleOpenModal={handleOpenModal} onClosed={openModalCreated} />
            <ModalDeleteInputValeu OpenModal={openModalDeleteInputDizimo} handleOpenModal={() => handleStateValeu(setOpenModalDeleteInputDizimo)} />
        </section>
    )
}