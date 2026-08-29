import { DTODizimistaUpdate } from "../schemas/schema-dizimista-update";
import { PickCardDizimista } from "../types/dizimista/pick-card-dizimista";

export interface InterfaceCardDizimista extends PickCardDizimista {
  handleModalUpdate: () => void;
  handleModaAddedMoney: () => void;
  handleModalDelete: () => void
  openModalDeleteInputDizimo?: boolean,
  handleOpenModalDeleteInputDizimo?: () => void,
  handleModalView: () => void;
  id: string;
  idCapela?: string;
  UpdateDizimista: (data: DTODizimistaUpdate) => void;
}
