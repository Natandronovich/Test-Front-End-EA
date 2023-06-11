let countDownDate = new Date("July 23, 2023 24:00:00").getTime();

// Обновляем обратный отсчет каждую 1 секунду
let upDateTime = setInterval(function() {

let nowDate = new Date().getTime();
let distance = countDownDate - nowDate;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Выводим результат в виде элемента с id
document.getElementById("main__countdown").innerHTML =
    `<div class="countdown-number">
        <span class="days countdown-time">${days}</span>
        <div class="countdoun-text-background">
            <span class="countdown-text">Days</span>
        </div>
    </div>
    <div class="contdown-colon">:</div>
    <div class="countdown-number">
        <span class="hours countdown-time">${hours}</span>
        <div class="countdoun-text-background">
            <span class="countdown-text">Hours</span>
        </div>
    </div>
    <div class="contdown-colon">:</div>
    <div class="countdown-number">
        <span class="minutes countdown-time">${minutes}</span>
        <div class="countdoun-text-background">
            <span class="countdown-text">Minutes</span>
        </div>
    </div>
    <div class="contdown-colon">:</div>
    <div class="countdown-number">
        <span class="seconds countdown-time">${seconds}</span>
        <div class="countdoun-text-background">
            <span class="countdown-text">Seconds</span>
        </div>
    </div>`;
    
// Если обратный отсчет закончился
  if (distance < 0) {
    clearInterval(upDateTime);
    document.getElementById("main__countdown").innerHTML = "Time is up!";
  }
}, 1000);
