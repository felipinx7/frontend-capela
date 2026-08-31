import IconDelete from '@/src/assets/icons/icon-delete'
import { DeleteInputDizimo } from '@/src/services/DeleteInputDizimo.'
import ReactDOM from 'react-dom'

interface InterfacceModalDeleteInputValeu {
    OpenModal: boolean,
    handleOpenModal: () => void
    id?: string
}


export function ModalDeleteInputValeu({ OpenModal, handleOpenModal, id }: InterfacceModalDeleteInputValeu) {

    async function DeleteInputDizimos(id: string) {
        const response = await DeleteInputDizimo(id)
        handleOpenModal()
    }

    return ReactDOM.createPortal(
        <section className={`${OpenModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-[999999999999999] bg-black/20 transition-all ease-in-out px-4 duration-500 absolute w-full h-screen`}>
            <div className='w-full h-screen flex items-center justify-center'>
                <div className={`bg-white transition-all ease-in-out duration-500 ${OpenModal ? "scale-100 opacity-100" : "scale-150 opacity-0"} flex items-center justify-center w-[34%] max-lg:w-[80%] flex-col rounded-lg gap-3 h-auto p-10`}>
                    <div className="w-[90px] h-[90px] flex shadow-2xl items-center justify-center bg-primary-100 p-4 rounded-full">
                        <IconDelete className='w-11 mt-1 ml-2 text-white' />
                    </div>
                    <div className='w-full flex items-center justify-center flex-col'>
                        <h1 className='font-semibold text-primary-100 text-[1.2rem]'>Deletar Entrada</h1>
                        <p className='font-ligth text-primary-100 w-[80%] text-center'>Deseja realmente excluir esta entrada?</p>
                    </div>
                    <div className='flex mt-2 items-center justify-center gap-3'>
                        <button onClick={() => DeleteInputDizimos(id as string)} className='text-[0.9rem] p-2 bg-primary-100 px-5 rounded-[2.1rem] text-white font-light cursor-pointer shadow-2xs'>Deletar entrada</button>
                        <button onClick={handleOpenModal} className='text-[0.9rem] p-2 bg-[#4371C7] px-9 rounded-[2.1rem] text-white font-light cursor-pointer shadow-2xs'>Cancelar</button>
                    </div>
                </div>
            </div>
        </section>,
        document.body,
    )
}