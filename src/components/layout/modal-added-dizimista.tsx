import IconCalendar from '@/src/assets/icons/icon-calendar'
import { IconClosed } from '@/src/assets/icons/icon-closed'
import IconMoney from '@/src/assets/icons/icon-money'
import { InterfaceModalAddedValue } from '@/src/interfaces/interface-modal-added-value-dizimista'
import { DTOAddedValue, schemaAddedValue } from '@/src/schemas/schema-added-valeu'
import { CreateEntradaDizimo } from '@/src/services/createEntradaDizimo'
import { zodResolver } from '@hookform/resolvers/zod'
import ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export function ModalAddedDizimista({ idCapela, idDizimista, handleOpenModal, onClosed }: InterfaceModalAddedValue) {
    const { register, reset, formState: { errors }, handleSubmit, } = useForm<DTOAddedValue>({ resolver: zodResolver(schemaAddedValue) })

    async function onSubmit(datas: DTOAddedValue) {
        const response = await CreateEntradaDizimo({ idCapela: idCapela, idDizimista: idDizimista, data: datas.data, valor: datas.valor })

        if (response === undefined) {
            toast.error("Error ao cadastrar dízimo!!")
        } else {
            toast.success("Dízimo adicionado com sucesso!!")
            handleOpenModal()
        }

    }

    return ReactDOM.createPortal(
        <section className={`${onClosed ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-0 bg-black/60 transition-all ease-in-out duration-500 absolute w-full h-screen`}>
            <div className='w-full h-screen flex items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className={`bg-white transition-all ease-in-out duration-500 ${onClosed ? "scale-100 opacity-100" : "scale-150 opacity-0"} w-[30%] max-md:w-[80%] flex flex-col rounded-lg h-auto p-10`}>
                    <div className='flex gap-3 flex-col'>

                        <div className='w-full flex items-center justify-between'>
                            <h1 className="text-primary-100 font-medium text-[1.1rem]">Adicionar Entrada</h1>
                            <button onClick={handleOpenModal} className='hover:bg-gray-400/50 w-8 rounded-[0.3rem] cursor-pointer h-8 flex items-center justify-center' type='button'>
                                <IconClosed />
                            </button>
                        </div>

                        <div className='flex flex-col gap-1 items-start justify-start'>
                            <p className='text-[0.8rem] text-primary-100'>Data da devolução</p>

                            <div className='relative w-full'>
                                <input {...register("data", { valueAsDate: true })}  minLength={0.1} type="date" className="w-full pl-8 outline-none placeholder:text-[0.7rem] placeholder:text-primary-100/70 text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray " placeholder='Digite o nome do dizimista' />
                                <IconCalendar className='w-4 absolute top-3 left-3 h-5 text-primary-100' />
                            </div>
                            {errors.data && (
                                <p className='style-error'>{errors.data?.message}</p>
                            )}
                        </div>

                        <div className='flex flex-col gap-1 items-start justify-start'>
                            <p className='text-[0.8rem] text-primary-100'>Valor do dízimo</p>

                            <div className='relative w-full'>
                                <input {...register("valor", { valueAsNumber: true })} step="any" type="number" className="w-full pl-8 outline-none placeholder:text-[0.7rem] placeholder:text-primary-100/70 text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray " placeholder='Digite o valor do dizimista' />
                                <IconMoney className='w-4 absolute top-3 left-3 h-5 text-primary-100' />
                            </div>
                            {errors.valor && (
                                <p className='style-error'>{errors.valor?.message}</p>
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