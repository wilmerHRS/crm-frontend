export const convertDate = (date: string) => {
  const dateClass = new Date(date);
  // resta 5 horas para horario normal
  dateClass.setHours(dateClass.getHours() - 5);

  const data = `${dateClass.toLocaleDateString()} ${dateClass.toLocaleTimeString()}`;
  return data;
};
