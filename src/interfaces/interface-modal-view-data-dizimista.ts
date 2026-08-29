import { DTOUpdateInputValue } from "../schemas/schema-update-input-value";

export interface InterfaceModalViewDataDizimista {
  OpenModalView: boolean;
  openModalDeleteInputDizimo?: boolean,
  handleOpenModalDeleteInputDizimo: () => void
  updateDataDizimista?: (data: DTOUpdateInputValue) => void;
  id: string;
  handleOpenModal: () => void;
}
