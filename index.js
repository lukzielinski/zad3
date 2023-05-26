let destinationDate = new Date("2023-06-02 18:38:00").getTime();

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function updateText() {
  let now = new Date().getTime();
  let timeRemaining = destinationDate - now;
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
  document.querySelector(".days").textContent = formatTime(days);
  document.querySelector(".hours").textContent = formatTime(hours);
  document.querySelector(".minutes").textContent = formatTime(minutes);
  document.querySelector(".seconds").textContent = formatTime(seconds);
  
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.querySelector(".counter").textContent = "Promotion is over!";
    document.querySelector(".button").style.display = "none";
  }
}

let countdown = setInterval(updateText, 1000);