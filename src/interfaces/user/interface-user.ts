import { TypeUser } from "../../types/type-user";
import { Capela } from "../capela/innterface-capela";
import { Ofertorio } from "../ofertorio/interface-ofertorio";

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  idCapela: string;
  tipoUsuario: TypeUser;
  ofertorios?: Ofertorio[];
  capela?: Capela;
}
