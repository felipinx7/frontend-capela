import { Capela } from "../capela/innterface-capela";
import { Usuario } from "../user/interface-user";

export interface Ofertorio {
  id: string;
  valor: number;
  data: Date;
  descricao?: string | undefined;
  criadoEm: Date;
  atualizadoEm: Date;
  idCapela: string;
  idUsuario: string;
  capela?: Capela;
  usuario?: Usuario;
}
