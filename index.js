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
  let time = currentTime.toLocaleTimeString('en-PH', { hour12: true });
  
  
  content.textContent = `${time}`;
  days.textContent = `${newDay}`
  dates.textContent = `${month} / ${date} / ${year}`;
}


setInterval(displayClock, 1000);
displayClock();
