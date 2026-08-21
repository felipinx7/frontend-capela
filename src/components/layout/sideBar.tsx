import Image from "next/image";
import { IconLogout } from "../../assets/icons/icon-logout";
import { PhotoUserDefault } from "../../assets/image";
import { InterfaceDataDashboard } from "../../interfaces/interface-data-dashboard";

export function SideBarDashboard({ functionLogout, handleSection, nameUser, nameSection, sectionsLinks, typeUser }: InterfaceDataDashboard) {
    return (
        <article className="w-[23%] max-lg:justify-center max-lg:gap-5 max-lg:flex-row max-lg:w-full max-lg:m-0 h-[95vh] max-lg:h-auto mt-4 ml-4 p-8 py-5 flex flex-col items-center justify-between bg-primary-100 rounded-[1.7rem]">
            {/* container of porfile */}
            <div className="w-full max-lg:hidden flex items-center justify-start gap-2">
                <Image src={PhotoUserDefault} width={55} alt="" />
                <div className="flex flex-col items-start justify-start">
                    <h3 className="text-[1rem] text-white font-semibold">{nameUser}</h3>
                    <p className="text-[0.8rem] text-white">{typeUser}(a)</p>
                </div>
            </div>

            {/* container links of navigation  */}
            <div className="w-full max-lg:w-auto max-lg:flex-row max-lg:justify-center flex flex-col items-center justify-between gap-4 max-lg:gap-0">
                {sectionsLinks?.map((link) => (
                    <button key={link.section} onClick={() => handleSection?.(link.section)} className={`${link.section === nameSection ? "bg-white text-primary-100 font-semibold" : "bg-transparent text-white font-regular "} group hover:bg-white duration-500 ease-in-out transition-all hover:text-primary-100 hover:font-bold flex cursor-pointer w-full max-lg:w-auto items-center p-3 rounded-2xl justify-start gap-3`}>
                        <div className={`${link.section === nameSection ? "bg-primary-100" : "bg-white"} w-8 group-hover:bg-primary-100 flex items-center justify-center h-8 rounded-[0.8rem]`}>
                            <link.icone className={`${link.section === nameSection ? "text-white" : "text-primary-100"} group-hover:text-white  w-5 `} />
                        </div>
                        <p className="max-lg:hidden">{link.nameSection}</p>
                    </button>
                ))}
            </div>

            {/* buttom logout  */}
            <button onClick={() => functionLogout?.()} className="hover:bg-gray-300 cursor-pointer w-[90%] max-lg:w-auto rounded-[0.9rem] p-3 bg-white text-primary-100 font-bold flex items-center justify-center gap-2">
                <IconLogout className="w-5" />
                <p className="max-lg:hidden">LOGOUT</p>
            </button>
        </article>
    )
}