import IconUser from '@/src/assets/icons/icon-user';
import { DeleteOfertorio } from '@/src/services/deleteOfertorio';
import ReactDOM from 'react-dom';
import toast from 'react-hot-toast';
interface Props { id: string; onDeleted: (id: string) => void; onClose: () => void; open: boolean }
export function ModalDeleteOfertorio({ id, onDeleted, onClose, open }: Props) {
    async function handleDelete() { const response = await DeleteOfertorio(id); if (!response) { toast.error('Não foi possível excluir o ofertório'); return }; onDeleted(id); toast.success('Ofertório excluído com sucesso'); onClose() }
    return ReactDOM.createPortal(<section className={`${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-0 bg-black/60 transition-all ease-in-out duration-500 absolute w-full h-screen`}><div className='w-full h-screen flex items-center justify-center'><div className={`bg-white transition-all ease-in-out duration-500 ${open ? "scale-100 opacity-100" : "scale-150 opacity-0"} flex items-center justify-center w-[34%] max-lg:w-[80%] flex-col rounded-lg gap-3 h-auto p-10`}>
        <div className='w-[90px] h-[90px] flex shadow-2xl items-center justify-center bg-primary-100 p-4 rounded-full'><IconUser className='w-11 text-white' /></div><div className='w-full flex items-center justify-center flex-col'><h1 className='font-semibold text-primary-100 text-[1.2rem]'>Deletar Ofertório</h1><p className='font-ligth text-primary-100 w-[80%] text-center'>Deseja realmente excluir este ofertório?</p></div><div className='flex mt-2 items-center justify-center gap-3'><button onClick={handleDelete} className='text-[0.9rem] p-2 bg-primary-100 px-5 rounded-[2.1rem] text-white font-light cursor-pointer shadow-2xs'>Deletar ofertório</button><button onClick={onClose} className='text-[0.9rem] p-2 bg-[#4371C7] px-9 rounded-[2.1rem] text-white font-light cursor-pointer shadow-2xs'>Cancelar</button></div>
    </div></div></section>, document.body)
}
