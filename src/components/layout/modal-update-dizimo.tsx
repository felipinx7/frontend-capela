import IconCalendar from '@/src/assets/icons/icon-calendar'
import { IconClosed } from '@/src/assets/icons/icon-closed'
import IconMoney from '@/src/assets/icons/icon-money'
import { InterfaceModalViewDataDizimista } from '@/src/interfaces/interface-modal-view-data-dizimista'
import { DTOUpdateInputValue, SachemaUpdateInputValeu } from '@/src/schemas/schema-update-input-value'
import { updateInputDizimo } from '@/src/services/updateInputDizimo'
import { PickModalAddedValueDizimista } from '@/src/types/picks/pick-modal-added-value-dizimista'
import { zodResolver } from '@hookform/resolvers/zod'
import ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export function ModalUpdateDizimo({ OpenModalView, handleOpenModal, handleOpenModalDeleteInputDizimo, id, updateDataDizimista }: InterfaceModalViewDataDizimista) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<DTOUpdateInputValue>({ resolver: zodResolver(SachemaUpdateInputValeu) })


    async function onSubmit(data: PickModalAddedValueDizimista) {
        const response = await updateInputDizimo(id, data)
        if (response === undefined) {
            toast.error("Error ao atualizar a entrada, tente novamente!!")
        } else {
            updateDataDizimista?.(data)
            handleOpenModal()
            reset()
            toast.success("Entrada Atualizada com sucesso!!")
        }
    }

    return ReactDOM.createPortal(
        <section className={`${OpenModalView ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} bg-black/60 transition-all z-[99999] ease-in-out duration-500 absolute w-full h-screen`}>
            <div className='w-full h-screen flex items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className={`bg-white transition-all ease-in-out duration-500 ${OpenModalView ? "scale-100 opacity-100" : "scale-150 opacity-0"} w-[30%] max-lg:w-[80%] flex flex-col rounded-lg h-auto p-10`}>
                    <div className='w-full flex items-center justify-between'>
                        <h1 className="text-primary-100 font-medium text-[1.1rem]">Editar Valor Dízimo</h1>
                        <button onClick={handleOpenModal} className='hover:bg-gray-400/50 w-8 rounded-[0.3rem] cursor-pointer h-8 flex items-center justify-center' type='button'>
                            <IconClosed />
                        </button>
                    </div>


                    <div className='flex mt-2 flex-col gap-1 items-start justify-start'>
                        <p className='text-[0.8rem] text-primary-100'>Data da devolução</p>

                        <div className='relative  w-full'>
                            <input {...register("data", { valueAsDate: true })} minLength={0.1} type="date" className="w-full pl-8 outline-none placeholder:text-[0.7rem] placeholder:text-primary-100/70 text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray " placeholder='Digite o nome do dizimista' />
                            <IconCalendar className='w-4 absolute top-3 left-3 h-5 text-primary-100' />
                        </div>
                        {errors.data && (
                            <p className='style-error'>{errors.data?.message}</p>
                        )}
                    </div>

                    <div className='flex mt-2 flex-col gap-1 items-start justify-start'>
                        <p className='text-[0.9rem] text-primary-100'>Nome</p>

                        <div className='relative w-full'>
                            <input {...register("valor", { valueAsNumber: true })} step={"any"} type="number" className="w-full pl-8 outline-none placeholder:text-[0.7rem] placeholder:text-primary-100/70 text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray " placeholder='Digite o nome do dizimista' />
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
                </form>
            </div>
        </section>,
        document.body,
    )
}