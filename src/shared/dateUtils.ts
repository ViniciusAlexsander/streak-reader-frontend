export const getAllDaysOfYear = (year: number) => {
  const dates = [];
  const startDate = new Date(`${year}-01-01`);
  const endDate = new Date(`${year}-12-31`);

  let currentDate = startDate;
  while (currentDate <= endDate) {
    dates.push({
      date: currentDate.toISOString().split("T")[0],
      count: 0,
      level: 0,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

export const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString("pt-BR");
};

export const calendarLabels = {
  months: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  totalCount: "{{count}} contribuições no total",
};
