import { IconClosed } from '@/src/assets/icons/icon-closed'
import IconEmail from '@/src/assets/icons/icon-email'
import IconLock from '@/src/assets/icons/icon-lock'
import IconUser from '@/src/assets/icons/icon-user'
import { Usuario } from '@/src/interfaces/user/interface-user'
import { DTOUsuario, SchemaUsuario } from '@/src/schemas/schema-usuario'
import { CreateUsuario } from '@/src/services/createUsuario'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface Props {
    idCapela: string
    onCreated: (usuario: Usuario) => void
    onClose: () => void
    open: boolean
}

export function ModalCreationUsuario({ idCapela, onCreated, onClose, open }: Props) {
    const { register, reset, formState: { errors }, handleSubmit } = useForm<DTOUsuario>({ resolver: zodResolver(SchemaUsuario), defaultValues: { tipoUsuario: 'USUARIO' } })
    const [loading, setLoading] = useState(false)

    async function onSubmit(data: DTOUsuario) {
        setLoading(true)
        try {
            const response = await CreateUsuario({
                nome: data.nome,
                email: data.email,
                senha: data.senha,
                idCapela,
                TipoUsuario: data.tipoUsuario,
            })
            if (!response) {
                toast.error('Não foi possível cadastrar o usuário')
                return
            }
            const usuario = response.data?.data ?? response.data
            onCreated({ ...usuario, ...data, idCapela })
            toast.success('Usuário cadastrado com sucesso')
            reset()
            onClose()
        } finally {
            setLoading(false)
        }
    }

    return ReactDOM.createPortal(
        <section className={`${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-0 bg-black/60 transition-all ease-in-out duration-500 absolute w-full h-screen`}>
            <div className='w-full h-screen flex items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className={`bg-white transition-all ease-in-out duration-500 ${open ? 'scale-100 opacity-100' : 'scale-150 opacity-0'} w-[30%] max-lg:w-[80%] flex flex-col gap-3 rounded-lg h-auto p-10`}>
                    <div className="flex items-center justify-between mb-2">
                        <h1 className="text-primary-100 font-medium text-[1.35rem]">Adicionar usuário</h1>
                        <button onClick={onClose} type="button" className="w-8 h-8 flex items-center justify-center text-primary-100"><IconClosed /></button>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start"><p className="text-[0.9rem] text-primary-100">Nome</p><div className="relative w-full"><input {...register('nome')} type="text" placeholder="Digite seu nome" className="w-full pl-8 outline-none placeholder:text-[0.7rem] placeholder:text-primary-100/70 text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray" /><IconUser className="w-4 absolute top-3 left-3 h-5 text-primary-100" /></div>{errors.nome && <p className="style-error">{errors.nome.message}</p>}</div>
                    <div className="flex flex-col gap-1 items-start justify-start"><p className="text-[0.9rem] text-primary-100">Email</p><div className="relative w-full"><input {...register('email')} type="email" placeholder="Digite seu email" className="w-full pl-8 outline-none placeholder:text-[0.7rem] placeholder:text-primary-100/70 text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray" /><IconEmail className="w-4 absolute top-3 left-3 h-5 text-primary-100" /></div>{errors.email && <p className="style-error">{errors.email.message}</p>}</div>
                    <div className="flex flex-col gap-1 items-start justify-start"><p className="text-[0.9rem] text-primary-100">Senha</p><div className="relative w-full"><input {...register('senha')} type="password" placeholder="Digite sua senha" className="w-full pl-8 outline-none placeholder:text-[0.7rem] placeholder:text-primary-100/70 text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray" /><IconLock className="w-4 absolute top-3 left-3 h-5 text-primary-100" /></div>{errors.senha && <p className="style-error">{errors.senha.message}</p>}</div>
                    <div className="flex flex-col gap-1 items-start justify-start"><p className="text-[0.9rem] text-primary-100">Função do usuário</p><div className="relative w-full"><select {...register('tipoUsuario')} className="w-full pl-8 outline-none text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray appearance-none bg-white"><option value="USUARIO">Usuário</option><option value="ADMINISTRADOR">Administrador</option></select><IconUser className="w-4 absolute top-3 left-3 h-5 text-primary-100" /></div></div>
                    <button disabled={loading} className="bg-primary-100 text-white rounded-full py-3 px-12 mt-5 self-center min-w-[210px] shadow-lg cursor-pointer disabled:bg-gray-400">{loading ? 'Cadastrando...' : 'Criar Usuário'}</button>
                </form>
            </div>
        </section>, document.body,
    )
}
