const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const ampm = document.getElementById('ampm');

const date = new Date();
date.toISOString();

const clockUpdate = function () {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let getampm;

  h > 12 ? ((h -= 12), (getampm = 'PM')) : (getampm = 'AM');
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  hour.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
  ampm.textContent = getampm;

  setInterval(() => {
    clockUpdate();
  }, 1000);
};

clockUpdate();
