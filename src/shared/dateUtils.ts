export const getAllDaysOfYear = (year: number) => {
  const dates = [];
  const startDate = new Date(`${year}-01-01T00:00:00Z`);
  const endDate = new Date(`${year}-12-31T23:59:59Z`);

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
  const date = new Date(dateStr);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  return `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;
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
  legend: {
    less: "Sem leitura",
    more: "Com leitura",
  },
};
