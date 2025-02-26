"use strict";
const timerBlock = document.querySelector(".timer"),
  sec = timerBlock.querySelector("#second"),
  min = timerBlock.querySelector("#minute"),
  hour = timerBlock.querySelector("#hour"),
  day = timerBlock.querySelector("#day");

function getTimeRemaining(deadLine) {
  const currentTime = Date.parse(new Date());

  const milis = Date.parse(deadLine) - currentTime,
    secs = Math.floor((milis / 1000) % 60),
    mins = Math.floor((milis / 1000 / 60) % 60),
    hours = Math.floor(((milis / 1000) * 60 * 60) % 24),
    days = Math.floor(milis / (1000 * 60 * 60 * 24));

  return {
    milis,
    secs,
    mins,
    hours,
    days,
  };
}

function setTimer(deadLine) {
  timerInterval = setInterval(updateTimer, 1000);

  updateTimer();
  function updateTimer() {
    const time = getTimeRemaining(deadLine);

    sec.innerHTML = time.secs;
    min.innerHTML = time.mins;
    hour.innerHTML = time.hours;
    day.innerHTML = time.days;

    if (time <= 0) {
      clearInterval(timerInterval);
    }
  }
}

setTimer("2026-01-02");
