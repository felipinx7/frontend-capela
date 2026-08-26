export function GetMounthName(numberMounth: number) {
  if (numberMounth > 0 && numberMounth <= 12) {
    const mounthUser = new Date(2000, numberMounth - 1);
    return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(mounthUser);
  } else {
    console.log("Mês inválido!!");
  }
}
