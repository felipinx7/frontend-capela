import { PickModalAddedValueDizimista } from "../types/picks/pick-modal-added-value-dizimista";

export interface InterfaceModalAddedValue extends PickModalAddedValueDizimista{
    idCapela: string,
    handleOpenModal: () => void,
    onClosed: boolean,
    idDizimista: string
}