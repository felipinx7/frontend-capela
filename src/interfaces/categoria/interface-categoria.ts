import { Capela } from "../capela/innterface-capela";
import { Gasto } from "../gasto/interface-gasto";

export interface Categoria {
  id: string;
  nome: string;
  idCapela: string;
  gastos?: Gasto[];
  capela?: Capela;
}
