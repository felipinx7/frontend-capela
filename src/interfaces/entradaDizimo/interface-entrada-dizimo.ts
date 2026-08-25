import { Capela } from "../capela/innterface-capela";
import { Dizimista } from "../dizimista/interface-dzimista";

export interface EntradaDizimo {
  id: string;
  valor: number;
  data: Date;
  idDizimista: string;
  idCapela: string;
  capela?: Capela;
  dizimista?: Dizimista;
  criadoEm: Date;
  atualizadoEm: Date;
}
