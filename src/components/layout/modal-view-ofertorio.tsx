import { IconClosed } from '@/src/assets/icons/icon-closed';
import IconOfettory from '@/src/assets/icons/icon-ofettory';
import { Ofertorio } from '@/src/interfaces/ofertorio/interface-ofertorio';
import ReactDOM from 'react-dom';
interface Props { ofertorio: Ofertorio; onClose: () => void; open: boolean }
export function ModalViewOfertorio({ ofertorio, onClose, open }: Props) {
    return ReactDOM.createPortal(<section className={`${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-0 bg-black/60 transition-all ease-in-out duration-500 absolute w-full h-screen`}><div className='w-full h-screen flex items-center justify-center'><div className={`bg-white transition-all ease-in-out duration-500 ${open ? "scale-100 opacity-100" : "scale-150 opacity-0"} w-[30%] max-lg:w-[80%] flex flex-col gap-3 rounded-lg h-auto p-10`}>
        <div className='w-full flex items-center justify-between'><h1 className='text-primary-100 font-medium text-[1.1rem]'>Dados do Ofertório</h1><button onClick={onClose} type='button' className='w-8 h-8 text-primary-100'><IconClosed /></button></div>
        <div className='flex items-center gap-3 text-primary-100'><div className='w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center'><IconOfettory className='w-6 text-white' /></div><div className='flex flex-col gap-1'><strong className='text-[1rem]'>R$ {Number(ofertorio.valor).toFixed(2).replace('.', ',')}</strong><span className='text-[0.8rem]'>{new Date(ofertorio.data).toLocaleDateString('pt-BR')}</span><span className='text-[0.8rem]'>{ofertorio.descricao || 'Sem descrição'}</span></div></div>
    </div></div></section>, document.body)
}
