export const convertDate = (date: string) => {
  const dateClass = new Date(date);
  const data = `${dateClass.toLocaleDateString()} ${dateClass.toLocaleTimeString()}`;
  return data;
};
