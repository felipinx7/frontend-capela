import { PhotoDefaultResultFromSearch } from "../assets/image";

export function CardShowDizimista() {
    return (
        <article className="bg-white rounded-[1.5rem] flex items-start justify-start gap-3 py-3 pr-35 pl-3 border-2 border-primary-100">
            <img src={PhotoDefaultResultFromSearch.src} className="w-14 h-14" alt="" />
            <div className="flex flex-col gap">
                <h1 className="text-primary-100 text-[1.1rem] font-semibold">Rosenir Paiva</h1>
                <h1 className="font-medium text-primary-100 text-[0.9rem]">Adminstrador</h1>
            </div>
        </article>
    )
}