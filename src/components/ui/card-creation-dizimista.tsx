import IconAddPeople from '@/src/assets/icons/icon-add-people'
import { IconClosed } from '@/src/assets/icons/icon-closed'
import ReactDOM from 'react-dom'

export function CardCreationDizimista() {
    return ReactDOM.createPortal(
        <section className="bg-black/60 absolute w-full h-screen">
            <div className='w-full h-screen flex items-center justify-center'>
                <form action="" className='bg-white w-[30%] h-auto p-10'>
                    <div className='flex flex-col'>
                        <div className='w-full flex items-center justify-between'>
                            <h1>Adicionar Dizimista</h1>
                            <button type='button'>
                                <IconClosed />
                            </button>
                        </div>
                        <div className='relative'>
                            <input type="text" placeholder='Digite o nome do dizimista' />
                            <IconAddPeople className='w-3 h-3' />
                        </div>
                    </div>
                </form>
            </div>
        </section>,
        document.body,
    )
}