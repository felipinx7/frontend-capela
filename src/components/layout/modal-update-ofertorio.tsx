import IconCalendar from '@/src/assets/icons/icon-calendar'
import { IconClosed } from '@/src/assets/icons/icon-closed'
import IconMoney from '@/src/assets/icons/icon-money'
import IconOfettory from '@/src/assets/icons/icon-ofettory'
import { Ofertorio } from '@/src/interfaces/ofertorio/interface-ofertorio'
import { DTOOfertorio, SchemaOfertorio } from '@/src/schemas/schema-ofertorio'
import { UpdateOfertorio } from '@/src/services/updateOfertorio'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
interface Props { ofertorio: Ofertorio; onUpdated: (item: Ofertorio) => void; onClose: () => void; open: boolean }
export function ModalUpdateOfertorio({ ofertorio, onUpdated, onClose, open }: Props) {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<DTOOfertorio>({ resolver: zodResolver(SchemaOfertorio) })
    const [loading, setLoading] = useState(false)
    useEffect(() => { reset({ valor: Number(ofertorio.valor), data: new Date(ofertorio.data).toISOString().slice(0, 10), descricao: ofertorio.descricao || '' }) }, [ofertorio, reset])
    async function onSubmit(data: DTOOfertorio) { setLoading(true); try { const response = await UpdateOfertorio(ofertorio.id, { ...data, data: `${data.data}T00:00:00.000Z` }); if (!response) { toast.error('Não foi possível atualizar o ofertório'); return }; onUpdated({ ...ofertorio, ...data }); toast.success('Ofertório atualizado com sucesso'); onClose() } finally { setLoading(false) } }
    return ReactDOM.createPortal(<section className={`${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-0 bg-black/60 transition-all ease-in-out duration-500 absolute w-full h-screen`}><div className='w-full h-screen flex items-center justify-center'><form onSubmit={handleSubmit(onSubmit)} className={`bg-white transition-all ease-in-out duration-500 ${open ? "scale-100 opacity-100" : "scale-150 opacity-0"} w-[30%] max-lg:w-[80%] flex flex-col gap-3 rounded-lg h-auto p-10`}>
        <div className='w-full flex items-center justify-between'><h1 className='text-primary-100 font-medium text-[1.1rem]'>Editar Ofertório</h1><button onClick={onClose} type='button' className='w-8 h-8 text-primary-100'><IconClosed /></button></div>
        <div className='flex flex-col gap-1 items-start justify-start'><p className='text-[0.9rem] text-primary-100'>Valor</p><div className='relative w-full'><input {...register('valor', { valueAsNumber: true })} type='number' step='any' className='w-full pl-8 outline-none text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray' /><IconMoney className='w-4 absolute top-3 left-3 h-5 text-primary-100' /></div>{errors.valor && <p className='style-error'>{errors.valor.message}</p>}</div>
        <div className='flex flex-col gap-1 items-start justify-start'><p className='text-[0.9rem] text-primary-100'>Data</p><div className='relative w-full'><input {...register('data')} type='date' className='w-full pl-8 outline-none text-primary-100 text-[0.7rem] rounded-full p-3 border border-gray' /><IconCalendar className='w-4 absolute top-3 left-3 h-5 text-primary-100' /></div>{errors.data && <p className='style-error'>{errors.data.message}</p>}</div>
        <div className='flex flex-col gap-1 items-start justify-start'><p className='text-[0.9rem] text-primary-100'>Descrição</p><div className='relative w-full'><textarea {...register('descricao')} className='w-full pl-8 outline-none text-primary-100 text-[0.7rem] rounded-2xl p-3 border border-gray resize-none h-20' /><IconOfettory className='w-4 absolute top-3 left-3 h-5 text-primary-100' /></div></div>
        <button disabled={loading} className='bg-primary-100 text-white rounded-full py-3 px-8 mt-4 self-center shadow-lg cursor-pointer disabled:bg-gray-400'>{loading ? 'Atualizando...' : 'Atualizar Ofertório'}</button>
    </form></div></section>, document.body)
}
