"use strict";

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
console.log(getTimeRemaining("2026-01-02"));
