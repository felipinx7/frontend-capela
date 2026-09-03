export function GetMounthName(numberMounth: number | Date | string) {
  let date: Date;

  console.log("params", Number(String(numberMounth).split("-")[1]));
  console.log("params 2", typeof numberMounth);


  if (typeof numberMounth === "number") {
    date = new Date(2000, numberMounth - 1, 1);
    console.info("Date if 1", date);
  } 
  
  if(typeof numberMounth === "string"){
    date = new Date(numberMounth)
  } else {
    date = numberMounth as Date
  }
  
  console.log("INTL", new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date))

  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}
