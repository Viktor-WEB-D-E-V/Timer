"use strict";
function getTimeRemaining(selector, deadLine) {
  let secs, mins, hours, days;
  const currentTime = Date.parse(new Date());
  const milis = Date.parse(deadLine) - currentTime;

  if (milis <= 0) {
    const timer = document.querySelector(selector);
    console.log(timer);
    timer.innerHTML = "<p class='text-timer-done'>The timer has completed the work</p>";
  } else {
    (secs = Math.floor((milis / 1000) % 60)),
      (mins = Math.floor((milis / 1000 / 60) % 60)),
      (hours = Math.floor((milis / (1000 * 60 * 60)) % 24)),
      (days = Math.floor(milis / (1000 * 60 * 60 * 24)));
  }

  return {
    milis,
    secs,
    mins,
    hours,
    days,
  };
}

function setTimer(selector, deadLine) {
  const timerBlock = document.querySelector(selector),
    sec = timerBlock.querySelector("#second"),
    min = timerBlock.querySelector("#minute"),
    hour = timerBlock.querySelector("#hour"),
    day = timerBlock.querySelector("#day"),
    timerInterval = setInterval(updateTimer, 1000);

  updateTimer();

  function updateTimer() {
    const timeLeft = getTimeRemaining(selector, deadLine);
    sec.innerHTML = addZero(timeLeft.secs);
    min.innerHTML = addZero(timeLeft.mins);
    hour.innerHTML = addZero(timeLeft.hours);
    day.innerHTML = addZero(timeLeft.days);

    if (timeLeft.milis <= 0) {
      clearInterval(timerInterval);
    }
  }
}

function addZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

setTimer(".timer", "2026-01-09");
