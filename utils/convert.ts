export function convertTime(time: string): string {
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const instance = new Date(time);

  const year = instance.getFullYear();
  const month = instance.getMonth();
  const date = instance.getDate();
  const hours = instance.getHours();
  const minutes = instance.getMinutes();

  return `${date < 10 ? `0${date}` : date} ${months[month]} ${year} ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}
