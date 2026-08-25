import { PhotoUserDefault } from "@/src/assets/icons/image";
import { InterfaceDataDashboard } from "@/src/interfaces/interface-data-dashboard";
import Image from "next/image";

export function CardPorfile({ nameUser, typeUser }: InterfaceDataDashboard) {
    return (
        <div className="w-full flex items-center justify-start gap-2">
            <Image src={PhotoUserDefault} width={55} alt="" />

            <div className="flex flex-col items-start justify-start">
                <h3 className="text-[1rem] text-white font-semibold">{nameUser}</h3>
                <p className="text-[0.8rem] text-white">{typeUser}(a)</p>
            </div>
        </div>
    )
}