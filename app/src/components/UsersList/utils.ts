export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return `${formatDateNumber(date.getDate())}/${formatDateNumber(
    date.getMonth() + 1
  )}/${date.getFullYear()} - ${formatDateNumber(
    date.getHours()
  )}:${formatDateNumber(date.getMinutes())}`;
};

const formatDateNumber = (number: number, reverse: boolean = false) => {
  if (number < 10) {
    if (reverse) return `${number}0`;
    else return `0${number}`;
  } else {
    return number.toString();
  }
};
