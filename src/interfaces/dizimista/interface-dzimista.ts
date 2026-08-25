import { Capela } from "../capela/innterface-capela";
import { EntradaDizimo } from "../entradaDizimo/interface-entrada-dizimo";

export interface Dizimista {
  id: string;
  nome: string;
  idCapela: string;
  capela?: Capela;
  entradasDizimo?: EntradaDizimo[];
}
