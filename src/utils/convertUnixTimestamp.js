export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  switch (month) {
    case "01":
      month = "Jan";
      break;
    case "02":
      month = "Feb";
      break;
    case "03":
      month = "Mar";
      break;
    case "04":
      month = "Apr";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "Jun";
      break;
    case "07":
      month = "Jul";
      break;
    case "08":
      month = "Aug";
      break;
    case "09":
      month = "Sep";
      break;
    case "10":
      month = "Oct";
      break;
    case "11":
      month = "Nov";
      break;
    case "12":
      month = "Dec";
      break;
  }

  return `${month} ${day}, ${year}`;
}

export function formatTime(timestamp) {
  const date = new Date(timestamp);
  let hours = String(date.getHours());
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  let period = "AM";
  let hours12 = parseInt(hours, 10);
  if (hours12 >= 12) {
    period = "PM";
    if (hours12 > 12) {
      hours12 -= 12;
    }
  }
  hours = String(hours12);

  return `${hours.length === 1 ? hours : hours.padStart(2, "0")}:${minutes} ${period}`;
}
