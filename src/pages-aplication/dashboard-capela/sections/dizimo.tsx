import IconAddPeople from "@/src/assets/icons/icon-add-people";
import IconSearch from "@/src/assets/icons/icon-search";
import { PhotoDefaultResultFromSearch } from "@/src/assets/image";
import { CardDizimista } from "@/src/components/ui/card-dizimista";
import { InterfaceDizimista } from "@/src/interfaces/inteface-dizmista";
import { GetAllDizimista } from "@/src/services/getAllDizimista";
import { useEffect, useState } from "react";

export function SectionDizimoCapela() {
    const [dizimistas, setDizimista] = useState<InterfaceDizimista[]>([])
    const [valueInput, setValeuInput] = useState<string>("")
    const dizimistasFiltered = dizimistas.filter((dizimista) => dizimista.nome?.toLocaleUpperCase().includes(valueInput.toUpperCase()))


    useEffect(() => {
        async function FetchDataDizimo() {
            const allDizimistas = await GetAllDizimista()
            setDizimista(allDizimistas?.data.data)
        }

        FetchDataDizimo()
    }, [])


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

                <button className="flex flex-row-reverse text-white h-auto p-2 rounded-[2.1rem] w-auto font-bold text-[0.7rem] text-nowrap items-center bg-primary-100 justify-start pr-3 gap-3">
                    Adicionar Dizimista
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <IconAddPeople className="w-4 text-primary-100 " />
                    </div>
                </button>
            </div>


            <div className="flex overflow-auto h-[65vh] max-lg:h-screen max w-full flex-col gap-2">
                {dizimistasFiltered.length > 0 ? dizimistasFiltered.map((dizimista) => (
                    <CardDizimista key={dizimista.nome} nome={dizimista.nome} />
                )) : (
                    <div className="flex items-center justify-center max-lg:justify-start h-screen w-full flex-col">
                        <img src={PhotoDefaultResultFromSearch.src} />
                      <p className="text-primary-100">Nenhum Dizimista Encontrado</p>
                    </div>
                )}
            </div>
        </section>
    )
}