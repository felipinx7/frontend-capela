import { IconClosed } from '@/src/assets/icons/icon-closed'
import { PhotoUserDefault } from '@/src/assets/image'
import { InterfaceModalViewDataDizimista } from '@/src/interfaces/interface-modal-view-data-dizimista'
import { GetUniqueDizimista } from '@/src/services/getUniqueDizimista'
import { PickDataDizimistaModalViewDizimista } from '@/src/types/picks/pick-data-dizimista-modal-view-dizimista'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { CardViewValueDizimista } from '../ui/card-view-value-dizimista'

export function ModalViewDizimista({ OpenModal, handleOpenModal, id }: InterfaceModalViewDataDizimista) {
    const [dadosDizimista, setDizimista] = useState<PickDataDizimistaModalViewDizimista>()

    async function a() {
        console.log(await GetUniqueDizimista("47b38ff8-f5af-4adb-a8a5-14abd118544a"))
    }


    console.log("vdaPW", a())

    return ReactDOM.createPortal(
        <section className={`${OpenModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-0 bg-black/60 transition-all ease-in-out duration-500 absolute w-full h-screen`}>
            <div className='w-full h-screen flex items-center justify-center'>
                <div className={`bg-white transition-all ease-in-out duration-500 ${OpenModal ? "scale-100 opacity-100" : "scale-150 opacity-0"} w-[30%] max-md:w-[80%] flex flex-col rounded-lg h-auto p-10`}>
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
                                <h1 className='font-bold text-[1.1rem] text-primary-100'>Rosenir Paiva Lima Melo</h1>
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
                                <CardViewValueDizimista />
                                <CardViewValueDizimista />
                                <CardViewValueDizimista />
                                <CardViewValueDizimista />
                                <CardViewValueDizimista />
                                <CardViewValueDizimista />
                                <CardViewValueDizimista />
                                <CardViewValueDizimista />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>,
        document.body,
    )
}