const content = document.querySelector(".contents");
const dates = document.querySelector(".dates");
const days = document.querySelector(".days")

const dayOfWeeks = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

function displayClock(){
  let currentTime = new Date();

  let month = currentTime.getMonth() + 1;
  let date = currentTime.getDate();
  let day = currentTime.getDay();
  let newDay;

  if(day >= 1 && day <= dayOfWeeks.length){
    newDay = dayOfWeeks[day - 1];
  }
  let year = currentTime.getFullYear();
  let hours = currentTime.getHours().toString().padStart(2, "0");
  let mins = currentTime.getMinutes().toString().padStart(2, "0");
  let seconds = currentTime.getSeconds().toString().padStart(2, "0");
  
  let amPm = hours > 11 && mins > 59 && seconds > 59 ? "AM" : "PM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours === 0 ? 12 : hours;
  
  content.textContent = `${hours}:${mins}:${seconds} ${amPm}`;
  days.textContent = `${newDay}`
  dates.textContent = `${month} / ${date} / ${year}`;
}


setInterval(displayClock, 1000);
displayClock();
