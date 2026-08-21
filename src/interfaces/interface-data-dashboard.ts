import { TypeSectionDashboardCapela } from "../types/type-sections-dashboard";
import { InterfaceLinkSectionDashboard } from "./interface-link-sectio-dashboard";

export interface InterfaceDataDashboard {
  nameUser?: string ;
  nameSection?: TypeSectionDashboardCapela,
  typeUser?: string;
  functionLogout?: () => void;
  sectionsLinks?: InterfaceLinkSectionDashboard[];
  handleSection?: (nameSection: TypeSectionDashboardCapela) => void;
}
