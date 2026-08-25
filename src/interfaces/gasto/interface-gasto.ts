import { Capela } from "../capela/innterface-capela";
import { Categoria } from "../categoria/interface-categoria";

export interface Gasto {
  id: string;
  valor: number;
  descricao?: string | null;
  data: string;
  idCategoria: string;
  idCapela: string;
  categoria?: Categoria;
  capela?: Capela;
  criadoEm: string;
  atualizadoEm: string;
}
