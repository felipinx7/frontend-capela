import { IconClosed } from '@/src/assets/icons/icon-closed'
import { PhotoUserDefault } from '@/src/assets/image'
import { InterfaceModalViewDataDizimista } from '@/src/interfaces/interface-modal-view-data-dizimista'
import { DTOUpdateInputValue } from '@/src/schemas/schema-update-input-value'
import { GetUniqueDizimista } from '@/src/services/getUniqueDizimista'
import { PickDataDizimistaModalViewDizimista } from '@/src/types/picks/pick-data-dizimista-modal-view-dizimista'
import { GetMounthName } from '@/src/utils/get-mounth-name'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { CardViewValueDizimista } from '../ui/card-view-value-dizimista'

export function ModalViewDizimista({ handleOpenModal, id, OpenModalView, handleOpenModalDeleteInputDizimo, openModalDeleteInputDizimo, updateDataDizimista }: InterfaceModalViewDataDizimista) {
    const [dadosDizimista, setDizimista] = useState<PickDataDizimistaModalViewDizimista>()

    function updateInputValue(idEntrada: string, data: DTOUpdateInputValue) {
        setDizimista((prev) => prev ? { ...prev, entradasDizimo: prev.entradasDizimo?.map((entrada) => (entrada.id === idEntrada ? { ...entrada, ...data } : entrada)), } : prev)
    }

    useEffect(() => {
        async function FetchDataDizimista() {
            const response = await GetUniqueDizimista(id)
            setDizimista({ nome: response?.data.data.nome, entradasDizimo: response?.data.data.entrada })
        }

        FetchDataDizimista()
    }, [])

    console.log("VALOR DO ESTADO NO MODAL VIEW DIZIMO", openModalDeleteInputDizimo);


    return ReactDOM.createPortal(
        <section className={`${OpenModalView ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-[0] bg-black/60 transition-all ease-in-out duration-500 absolute w-full h-screen`}>
            <div className='w-full h-screen flex items-center justify-center'>
                <div className={`bg-white transition-all ease-in-out duration-500 ${OpenModalView ? "scale-100 opacity-100" : "scale-150 opacity-0"} w-[30%] max-lg:w-[80%] flex flex-col rounded-lg h-auto p-10`}>
                    <div className='flex gap-3 flex-col'>

                        <div className='w-full flex items-center justify-between'>
                            <h1 className="text-primary-100 font-medium text-[1.1rem]">Dados do Dizimista</h1>
                            <button onClick={handleOpenModal} className='hover:bg-gray-400/50 w-8 rounded-[0.3rem] cursor-pointer h-8 flex items-center justify-center' type='button'>
                                <IconClosed />
                            </button>
                        </div>

                        <div className='flex gap-1 items-start justify-start gap-4'>
                            <img src={PhotoUserDefault.src} className='w-[50px]' />
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-[1.1rem] text-primary-100'>{dadosDizimista?.nome}</h1>
                                <p className='font-normal text-[0.9rem]'>Dizimista</p>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <p className='text-primary-100 font-medium'>Entradas do dízimo</p>

                            <div className='mt-4'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-primary-100 font-satoshi font-bold text-[0.8rem]'>MÊS</p>
                                    <p className='text-primary-100 font-satoshi font-bold text-[0.8rem]'>VALOR</p>
                                </div>
                                <hr className='border-primary-100 border-[1.5] mt-3' />
                            </div>

                            <div className='w-full max-h-[300px] mt-2 gap-3 overflow-auto items-center justify-start flex flex-col'>
                                {dadosDizimista?.entradasDizimo?.length ?? 0 > 0 ? (
                                    dadosDizimista?.entradasDizimo?.map((value) => (
                                        <CardViewValueDizimista
                                            handleOpenModalDeleteInputDizimo={handleOpenModalDeleteInputDizimo}
                                            hadleOpenModalInputDizimo={handleOpenModal}
                                            openModalDeleteInputDizimo={openModalDeleteInputDizimo as boolean}
                                            deleteInputDizimo={() => true}
                                            updateInputDizimo={(data) => updateInputValue(value.id, data)}
                                            confirmDeleteInputValeuDizimo={false}
                                            valueDizimo={value.valor}
                                            valueMonth={GetMounthName(Number(String(value.data).split("-")[1])) ?? ""}
                                            idInputDizimo={value.id}
                                            key={value.id} />
                                    ))
                                ) : (
                                    <div className='h-[px] flex items-center justify-center'>
                                        <h1 className='text-primary-100 text-[0.8rem]'>Nenhuma entrada registrado no mês</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>,
        document.body,
    )
}