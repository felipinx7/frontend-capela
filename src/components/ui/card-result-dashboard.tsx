import { InterfaceDashboardResult } from "../../interfaces/interface-dahboard-results";

export function CardResult(props: InterfaceDashboardResult) {
    return (
        <article className="h-35 border-2 rounded-xl border-primary-100 w-full bg-white shadow-2xl flex items-start p-4 justify-center gap-3 font-satosi flex-col">
            {props.valueEndSaldo !== undefined ? (
                <div className={`${props.valueEndSaldo ?? 0 < 0 ? "text-red-500" : "text-green-500"} text-[#2D2D2D] w-full flex items-center justify-start gap-2 text-[2rem] font-semibold`}>
                    <div className="font-sa w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center"><props.icon className={`${props.className ? props.className : ""} w-6 text-white`} /></div>
                    {props.valueEndSaldo}
                </div>
            ) : (
                <div className={`text-[#2D2D2D] w-full flex items-center justify-start gap-2 text-[2rem] font-semibold`}>
                    <div className="font-sa w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center"><props.icon className={`${props.className ? props.className : ""} w-6 text-white`} /></div>
                    {props.numberResult}
                </div>

            )}

            <p className="text-primary-100 text-[0.9rem]">{props.textResult}</p>
        </article>
    )
}