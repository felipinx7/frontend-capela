import { DTODizimistaUpdate } from "../schemas/schema-dizimista-update";

export interface InterfaceModalUpdateDizimista {
  OpenModal: boolean;
  handleOpenModal: () => void;
  updateDizimista: (data: DTODizimistaUpdate) => void;
  id?: any;
}
