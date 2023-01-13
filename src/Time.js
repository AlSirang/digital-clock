function getCurrentTime() {
    return new Date().toLocaleTimeString("en-US", { hour12: false });
}

function getCurrentYear() {
    return new Date().getFullYear();
}
function getTimeZone() {
    let timeZoneLocation = new Date()
        .toLocaleDateString("en-US", {
            timeZoneName: "long",
        })
        .split(" ");
    timeZoneLocation.shift();
    timeZoneLocation = timeZoneLocation.join(" ");
    return timeZoneLocation;
}

function getCurrentDate() {
  const months = [
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

  let date = new Date(Date.now())
    .toLocaleDateString("en-US", {
      timeZoneName: "long",
    })
    .split(" ")
    .shift();
  date = date.replace(/,/, "").split("/");
  const currentMonth = Number(date[0]) - 1;

  const dateFormated = [
    date[1], //day
    months[currentMonth], //month name
    date[2], //year
  ];

  return dateFormated.join(", ");
}


export { getCurrentTime, getCurrentYear, getTimeZone, getCurrentDate };
