import { IconClosed } from '@/src/assets/icons/icon-closed'
import IconEmail from '@/src/assets/icons/icon-email'
import IconUser from '@/src/assets/icons/icon-user'
import { Usuario } from '@/src/interfaces/user/interface-user'
import { DTOUsuarioUpdate, SchemaUsuarioUpdate } from '@/src/schemas/schema-usuario'
import { UpdateUsuario } from '@/src/services/updateUsuario'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface Props { usuario: Usuario; onUpdated: (usuario: Usuario) => void; onClose: () => void; open: boolean }

export function ModalUpdateUsuario({ usuario, onUpdated, onClose, open }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<DTOUsuarioUpdate>({ resolver: zodResolver(SchemaUsuarioUpdate), defaultValues: { nome: usuario.nome, email: usuario.email, tipoUsuario: usuario.tipoUsuario } })
    const [loading, setLoading] = useState(false)

    async function onSubmit(data: DTOUsuarioUpdate) {
        setLoading(true)
        try {
            const response = await UpdateUsuario(usuario.id, data)
            if (!response) { toast.error('Não foi possível atualizar o usuário'); return }
            onUpdated({ ...usuario, ...data })
            toast.success('Usuário atualizado com sucesso')
            onClose()
        } finally { setLoading(false) }
    }

    return ReactDOM.createPortal(<section className={`${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-0 bg-black/60 transition-all ease-in-out duration-500 absolute w-full h-screen`}><div className='w-full h-screen flex items-center justify-center'><form onSubmit={handleSubmit(onSubmit)} className={`bg-white transition-all ease-in-out duration-500 ${open ? 'scale-100 opacity-100' : 'scale-150 opacity-0'} w-[30%] max-lg:w-[80%] flex flex-col gap-3 rounded-lg h-auto p-10`}>
        <div className="flex items-center justify-between mb-2"><h1 className="text-primary-100 font-medium text-[1.35rem]">Editar Cadastro</h1><button onClick={onClose} type="button" className="w-8 h-8 text-primary-100"><IconClosed /></button></div>
        <div className="flex flex-col gap-1 items-start justify-start"><p className="text-[0.9rem] text-primary-100">Nome</p><div className="relative w-full"><input {...register('nome')} placeholder="Digite o nome atualizado" className="w-full pl-8 outline-none placeholder:text-[0.7rem] placeholder:text-primary-100/70 text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray" /><IconUser className="w-4 absolute top-3 left-3 h-5 text-primary-100" /></div>{errors.nome && <p className="style-error">{errors.nome.message}</p>}</div>
        <div className="flex flex-col gap-1 items-start justify-start"><p className="text-[0.9rem] text-primary-100">Email</p><div className="relative w-full"><input {...register('email')} type="email" placeholder="Digite o novo email" className="w-full pl-8 outline-none placeholder:text-[0.7rem] placeholder:text-primary-100/70 text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray" /><IconEmail className="w-4 absolute top-3 left-3 h-5 text-primary-100" /></div>{errors.email && <p className="style-error">{errors.email.message}</p>}</div>
        <div className="flex flex-col gap-1 items-start justify-start"><p className="text-[0.9rem] text-primary-100">Função do usuário</p><div className="relative w-full"><select {...register('tipoUsuario')} className="w-full pl-8 outline-none text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray appearance-none bg-white"><option value="USUARIO">Selecione a função do usuário</option><option value="ADMINISTRADOR">Administrador</option></select><IconUser className="w-4 absolute top-3 left-3 h-5 text-primary-100" /><span className="absolute right-3 top-2 text-primary-100 text-lg">⌄</span></div></div>
        <button disabled={loading} className="bg-primary-100 text-white rounded-full py-3 px-12 mt-5 self-center min-w-[210px] shadow-lg cursor-pointer disabled:bg-gray-400">{loading ? 'Atualizando...' : 'Atualizar dados'}</button>
    </form></div></section>, document.body)
}
