import { PickDataDizimista } from "@/src/types/dizimista/pick-data-dizimista";
import { PickSectionDizimista } from "@/src/types/picks/pick-section-dashboard-dizimista";

export interface InterfaceDataPorfileDashboard extends PickDataDizimista{
    typeUser: string
    id?: string
    entradas?: PickSectionDizimista[]
}