import IconHome from "../assets/icons/icon-home";
import IconMoney from "../assets/icons/icon-money";
import IconOfettory from "../assets/icons/icon-ofettory";
import IconPeoples from "../assets/icons/icon-peoples";
import IconRelatorio from "../assets/icons/icon-relatorio";
import IconUser from "../assets/icons/icon-user";
import { InterfaceLinkSectionDashboard } from "../interfaces/interface-link-sectio-dashboard";

export const linksDashboardCapela: InterfaceLinkSectionDashboard[] = [
  {
    icone: IconHome,
    nameSection: "Dashboard",
    section: "DASHBOARD",
  },
  {
    icone: IconMoney,
    nameSection: "Dízimo",
    section: "DIZIMO",
  },
  {
    icone: IconPeoples,
    nameSection: "Usuários",
    section: "USUARIOS",
  },
  {
    icone: IconOfettory,
    nameSection: "Ofertório",
    section: "OFERTORIO",
  },
  {
    icone: IconRelatorio,
    nameSection: "Relatório",
    section: "RELATORIO",
  },
  {
    icone: IconUser,
    nameSection: "Perfil",
    section: "PERFIL",
  },
];
