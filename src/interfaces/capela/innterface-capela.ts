import { Categoria } from "../categoria/interface-categoria";
import { Dizimista } from "../dizimista/interface-dzimista";
import { EntradaDizimo } from "../entradaDizimo/interface-entrada-dizimo";
import { Gasto } from "../gasto/interface-gasto";
import { Ofertorio } from "../ofertorio/interface-ofertorio";
import { Usuario } from "../user/interface-user";

export interface Capela {
  id: string;
  nome: string;
  email: string;
  senha: string;
  entradasDizimo?: EntradaDizimo[];
  gastos?: Gasto[];
  usuarios?: Usuario[];
  dizimistas?: Dizimista[];
  ofertorios?: Ofertorio[];
  categorias?: Categoria[];
}
