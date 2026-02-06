alert("SCRIPT IS RUNNING");

/* 💬 POSITIVE MESSAGES */
const messages = [
  "You’re growing beautifully 🌱",
  "Tiny steps still count 💚",
  "You survived this hour ✨",
  "Rest is productive too 🍃",
  "You are doing enough 🌸"
];

const messageEl = document.getElementById("message");

function showMessage() {
  messageEl.textContent =
    messages[Math.floor(Math.random() * messages.length)];
}

showMessage();
setInterval(showMessage, 3600000);

/* 🌱 PLANT GROWTH */
function growPlant() {
  const hour = 20;
  const stem = document.querySelector(".stem");
  const leaves = document.querySelectorAll(".leaf");
  const hat = document.querySelector(".wizard-hat");

  stem.style.height = `${30 + hour * 3}px`;

  if (hour >= 9) leaves[0].style.opacity = 1;
  if (hour >= 13) leaves[1].style.opacity = 1;
  if (hour >= 18) hat.style.opacity = 1;
  if (hour >= 20) stem.style.boxShadow = "0 0 10px #8affc1";
}

growPlant();
setInterval(growPlant, 3600000);

/* 🌦️ WEATHER */
const API_KEY = "3554ccf10fe237a494e595c1282265e0";
const CITY = "Kolkata";

async function updateWeather() {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`
    );
    const data = await res.json();

    const condition = data.weather[0].main.toLowerCase();
    const rain = document.querySelector(".rain");
    const sun = document.querySelector(".sun");

    rain.style.opacity = 0;
    sun.style.opacity = 0;

    if (condition.includes("rain")) rain.style.opacity = 1;
    if (condition.includes("clear")) sun.style.opacity = 1;

  } catch (e) {
    console.log("Weather error", e);
  }
}

updateWeather();
setInterval(updateWeather, 1800000);
