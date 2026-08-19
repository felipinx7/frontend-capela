import IconResult from "@/src/assets/icons/icon-result";
import { CardShowDizimista } from "@/src/components/card-show-dizimistas";
import { GetOfertorry } from "@/src/services/getOfertorry";
import { useEffect, useState } from "react";

export function SectionDashboardCapela() {
    const [inputValuesMonth, setInputValuesMonth] = useState<number>()

    useEffect(() => {
        async function FetcDataOfertorry() {
            const response = await GetOfertorry()
            if (response) {
                const valuesInputTotal: number[] = response.data.data.map((value: { valor: number }) => Number(value.valor))
                const sumValuesTotal = valuesInputTotal.reduce((valuePrevios: number, valueCurrent: number) => valuePrevios + valueCurrent, 0)
                setInputValuesMonth(sumValuesTotal)
            }
        }
        FetcDataOfertorry()
    }, [])

    return (
        <section className="flex flex-col gap-4 pt-8 pl-6 overflow-y-auto">
            <div className="flex flex-col gap-4">
                <h3 className="text-primary-100 font-semibold text-[1.4rem]">Informações Gerais</h3>
                <div className="w-full flex items-center gap-5 justify-between">
                    <article className="h-35 border-2 rounded-xl border-primary-100 w-full bg-white shadow-2xl flex items-start p-4 justify-center gap-3 font-satosi flex-col">
                        <div className="w-full flex items-center justify-start text-[#2D2D2D] gap-2 text-[1.7rem] font-semibold">
                            <div className="font-sa w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center"><IconResult className="w-6 text-white" /></div>
                            {inputValuesMonth}
                        </div>
                        <p className="text-primary-100 text-[0.9rem]">Olá Felipe</p>
                    </article>
                </div>
            </div>

            <div className="flex flex-col pt-5 gap-5">
                <h3 className="text-primary-100 font-semibold text-[1.4rem]">Dizimista Cadastrar</h3>
                <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
                    <CardShowDizimista />
                    <CardShowDizimista />
                    <CardShowDizimista />
                    <CardShowDizimista />
                    <CardShowDizimista />
                    <CardShowDizimista />
                    <CardShowDizimista />
                    <CardShowDizimista />
                    <CardShowDizimista />
                    <CardShowDizimista />
                    <CardShowDizimista />
                    <CardShowDizimista />
                </div>
            </div>
        </section>
    )
}