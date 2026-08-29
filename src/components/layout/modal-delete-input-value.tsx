import { IconClosed } from '@/src/assets/icons/icon-closed'
import ReactDOM from 'react-dom'

interface InterfacceModalDeleteInputValeu {
    OpenModal: boolean,
    handleOpenModal: () => void
}


export function ModalDeleteInputValeu({ OpenModal, handleOpenModal }: InterfacceModalDeleteInputValeu) {
    return ReactDOM.createPortal(
        <section className={`${OpenModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-[999999999999999] bg-black/60 transition-all ease-in-out duration-500 absolute w-full h-screen`}>
            <div className='w-full h-screen flex items-center justify-center'>
                <div className={`bg-white transition-all ease-in-out duration-500 ${OpenModal ? "scale-100 opacity-100" : "scale-150 opacity-0"} w-[30%] max-lg:w-[80%] flex flex-col rounded-lg h-auto p-10`}>
                    <div className='w-full flex items-center justify-between'>
                        <h1 className="text-primary-100 font-medium text-[1.1rem]">Dados do Dizimista</h1>
                        <button onClick={handleOpenModal} className='hover:bg-gray-400/50 w-8 rounded-[0.3rem] cursor-pointer h-8 flex items-center justify-center' type='button'>
                            <IconClosed />
                        </button>
                    </div>
                </div>
            </div>
        </section>,
        document.body,
    )
}