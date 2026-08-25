import IconResult from "@/src/assets/icons/icon-result";
import IconSaldo from "@/src/assets/icons/icon-saldo";
import { PhotoDefaultResultFromSearch } from "@/src/assets/image";
import { CardResult } from "@/src/components/ui/card-result-dashboard";
import { CardShowDizimista } from "@/src/components/ui/card-show-dizimistas";
import { InterfaceSectionDashboard } from "@/src/interfaces/interface-section-dashbord";
import { GetAllDizimista } from "@/src/services/getAllDizimista";
import { getAllSpentValue } from "@/src/services/getAllSpentValue";
import { GetOfertorry } from "@/src/services/getOfertorry";
import { GetOnlySpentAndInputMonth } from "@/src/utils/GetOnlySpentAndInputMonth";
import { useEffect, useState } from "react";


export function SectionDashboardCapela() {
    const [inputValuesMonth, setInputValuesMonth] = useState<number>(0)
    const [spentValueMonth, setSpentValueMonth] = useState<number>(0)
    const [dizimistas, setDizimista] = useState<InterfaceSectionDashboard[]>([])
    const saldoEnd = (inputValuesMonth ?? 0) - (spentValueMonth ?? 0)

    useEffect(() => {
        async function FetchDataPageDashboard() {
            const inputValues = await GetOfertorry()
            const allDizimistas = await GetAllDizimista()
            const spentValues = await getAllSpentValue()

            const inputOnlyMonth = GetOnlySpentAndInputMonth(inputValues).map((value: { valor: number }) => Number(value.valor)).reduce((valuePreviuos, valueCurrent) => valuePreviuos + valueCurrent, 0)
            const spentOnlyMonth = GetOnlySpentAndInputMonth(spentValues).map((value: { valor: number }) => Number(value.valor)).reduce((valuePreviuos, valueCurrent) => valuePreviuos + valueCurrent, 0)

            setDizimista(allDizimistas?.data.data)
            setInputValuesMonth(inputOnlyMonth)
            setSpentValueMonth(spentOnlyMonth)
        }

        FetchDataPageDashboard()
    }, [])




    return (
        <section className="style-sections-dashboard gap-4">
            <div className="flex flex-col gap-4">
                <h3 className="text-primary-100 font-semibold text-[1.4rem]">Informações Gerais</h3>
                <div className="w-full max-lg:flex-col flex items-center gap-5 justify-between">
                    <CardResult icon={IconResult} numberResult={inputValuesMonth} textResult="Total de Entradas desse mês" />
                    <CardResult icon={IconResult} numberResult={spentValueMonth} className="rotate-180" textResult="Total de Saídas desse mês" />
                    <CardResult icon={IconSaldo} valueEndSaldo={saldoEnd} numberResult={saldoEnd} className={`${saldoEnd >= 0 ? "text-green-500" : "text-red-500"}`} textResult="Saldo desse Mês" />
                </div>
            </div>

            <div className="flex flex-col pt-5 gap-5">
                <h3 className="text-primary-100 font-semibold text-[1.4rem]">Dizimista Cadastrar</h3>
                <div className={`${dizimistas.length > 0 ? "w-full grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4" : "flex items-center justify-center h-full w-full"}`}>
                    {dizimistas.length > 0 ? (dizimistas.map((link) => (
                        <CardShowDizimista key={link.nome} nome={link.nome} />
                    ))) : (
                        <div className="flex w-full h-full items-center justify-center flex-col">
                            <img src={PhotoDefaultResultFromSearch.src} />
                            <p className="text-primary-100">Nenhum dizimista cadastrado</p>
                        </div>
                    )
                    }
                </div>
            </div>
        </section>
    )
}