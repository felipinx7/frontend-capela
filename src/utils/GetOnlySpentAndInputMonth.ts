export function GetOnlySpentAndInputMonth(months: any) {
  const monthsCurrent = new Date().getMonth() + 1;

  const onlySpentAndInputOfMonth: [] = months.data.data.filter((dateInput: { data: number }) => {
    const monthsInput = String(dateInput.data).split("-")[1];
    return Number(monthsInput) === monthsCurrent;
  });

  return onlySpentAndInputOfMonth;
}
