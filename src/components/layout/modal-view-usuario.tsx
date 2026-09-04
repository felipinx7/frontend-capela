import { IconClosed } from '@/src/assets/icons/icon-closed';
import { PhotoUserDefault } from '@/src/assets/image';
import { Usuario } from '@/src/interfaces/user/interface-user';
import ReactDOM from 'react-dom';

interface Props { usuario: Usuario; onClose: () => void; open: boolean }

export function ModalViewUsuario({ usuario, onClose, open }: Props) {
    return ReactDOM.createPortal(<section className={`${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-0 bg-black/60 transition-all ease-in-out duration-500 absolute w-full h-screen`}><div className='w-full h-screen flex items-center justify-center'><div className={`bg-white transition-all ease-in-out duration-500 ${open ? 'scale-100 opacity-100' : 'scale-150 opacity-0'} w-[30%] max-lg:w-[80%] flex flex-col rounded-lg h-auto p-10`}>
        <div className="flex items-center justify-between mb-4"><h1 className="text-primary-100 font-medium text-[1rem]">Dados do usuário</h1><button onClick={onClose} type="button" className="w-7 h-7 text-primary-100"><IconClosed /></button></div>
        <div className="flex items-center gap-4"><img src={PhotoUserDefault.src} alt="" className="w-14 h-14" /><div className="text-primary-100 flex flex-col gap-1"><strong className="text-[0.9rem]">{usuario.nome}</strong><span className="text-[0.75rem]">{usuario.email}</span><span className="text-[0.7rem]">{usuario.tipoUsuario}</span></div></div>
    </div></div></section>, document.body)
}
