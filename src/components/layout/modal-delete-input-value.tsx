import { IconClosed } from '@/src/assets/icons/icon-closed'
import IconDelete from '@/src/assets/icons/icon-delete'
import ReactDOM from 'react-dom'

interface InterfacceModalDeleteInputValeu {
    OpenModal: boolean,
    handleOpenModal: () => void
}


export function ModalDeleteInputValeu({ OpenModal, handleOpenModal }: InterfacceModalDeleteInputValeu) {
    return ReactDOM.createPortal(
        <section className={`${OpenModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-[999999999999999] bg-black/60 transition-all ease-in-out duration-500 absolute w-full h-screen`}>
            <div className='w-full h-screen flex items-center justify-center'>
                <div className={`bg-white transition-all ease-in-out duration-500 ${OpenModal ? "scale-100 opacity-100" : "scale-150 opacity-0"} flex items-center justify-center w-[30%] max-lg:w-[80%] flex-col rounded-lg h-auto p-10`}>
                    <div className="w-[100px] h-[100px] flex items-center justify-center bg-primary-100 p-4 rounded-full">
                        <IconDelete className='w-10 text-white'/>
                    </div>
                </div> 
            </div>
        </section>,
        document.body,
    )
}