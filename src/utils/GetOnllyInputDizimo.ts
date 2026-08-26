export function GetOnlyInputDizimo(dizimo: any) {
  const monthsCurrent = new Date().getMonth() + 1;

  const dataInputDizimistas = dizimo?.data.data.flatMap((entrada: any) => entrada.entrada);
  const onlyInputDizimo = dataInputDizimistas.filter((data: { data: string }) => {
    const MonthInputDizimo = data.data.split("-")[1];
    return monthsCurrent === Number(MonthInputDizimo) ? data : false
    
  });
  return onlyInputDizimo;
}
