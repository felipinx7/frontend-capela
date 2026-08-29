import IconAddPeople from '@/src/assets/icons/icon-add-people'
import { IconClosed } from '@/src/assets/icons/icon-closed'
import { InterfaceEntradaDizmista } from '@/src/interfaces/interface-entrada-dizimista'
import { InterfaceDataPorfileDashboard } from '@/src/interfaces/user/interface-data-porfile-dashboard'
import { DTODizimista, SchemaDizimista } from '@/src/schemas/schema-dizimista'
import { CreateDizimista } from '@/src/services/CreateDizimista'
import { zodResolver } from '@hookform/resolvers/zod'
import ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'


interface InterfaceModalCreationDizimista {
    nome?: string,
    idCapela?: string,
    handleOpenModal: () => void
    createdDizimista: (data: InterfaceDataPorfileDashboard) => void;
    entradas?: InterfaceEntradaDizmista[]
    onClosed: boolean
}

export function CardCreationDizimista({ idCapela, handleOpenModal, createdDizimista, onClosed }: InterfaceModalCreationDizimista) {
    const { register, reset, formState: { errors }, handleSubmit, } = useForm<DTODizimista>({ resolver: zodResolver(SchemaDizimista) })

    async function onSubmit(data: DTODizimista) {
        const response = await CreateDizimista({ idCapela, nome: data.nome })

        if (response?.status === undefined) {
            toast.error("Dizimista já cadastrado com esse nome.")
            reset()
        } else {
            toast.success("Dizimista cadastrado com sucesso!!")
            createdDizimista({ nome: data.nome as string, typeUser: "Dizimista", idCapela: idCapela as string })
            handleOpenModal()
            reset()
        }
    }



    return ReactDOM.createPortal(
        <section className={`${onClosed ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-0 bg-black/60 transition-all ease-in-out duration-500 absolute w-full h-screen`}>
            <div className='w-full h-screen flex items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className={`bg-white transition-all ease-in-out duration-500 ${onClosed ? "scale-100 opacity-100" : "scale-150 opacity-0"} w-[30%] max-md:w-[80%] flex flex-col rounded-lg h-auto p-10`}>
                    <div className='flex gap-3 flex-col'>

                        <div className='w-full flex items-center justify-between'>
                            <h1 className="text-primary-100 font-medium text-[1.1rem]">Adicionar Dizimista</h1>
                            <button onClick={handleOpenModal} className='hover:bg-gray-400/50 w-8 rounded-[0.3rem] cursor-pointer h-8 flex items-center justify-center' type='button'>
                                <IconClosed />
                            </button>
                        </div>

                        <div className='flex flex-col gap-1 items-start justify-start'>
                            <p className='text-[0.9rem] text-primary-100'>Nome</p>

                            <div className='relative w-full'>
                                <input {...register("nome")} type="text" className="w-full pl-8 outline-none placeholder:text-[0.7rem] placeholder:text-primary-100/70 text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray " placeholder='Digite o nome do dizimista' />
                                <IconAddPeople className='w-4 absolute top-3 left-3 h-5 text-primary-100' />
                            </div>
                            {errors.nome && (
                                <p className='style-error'>{errors.nome?.message}</p>
                            )}
                        </div>

                        <div className='w-full flex items-center justify-center mt-4'>
                            <button type="submit" className='w-auto relative  rounded-[2.1rem] shadow-2xl cursor-pointer hover: py-2  px-8 text-[0.9rem] text-white bg-primary-100'>
                                Adicionar Dizimista
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>,
        document.body,
    )
}