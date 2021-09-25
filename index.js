const hourHand = document.getElementById('hourHand');
const minHand = document.getElementById('minHand');
const secHand = document.getElementById('secHand');
const digClock = document.getElementById('digital-clock');
const date = document.getElementById('date');

const setClock = () => {
  const currentDate = new Date();
  const secs = currentDate.getSeconds() / 60;
  const mins = (currentDate.getMinutes() + secs) / 60;
  const hr = (currentDate.getHours() + mins) / 12;
  secHand.style.setProperty('--rotation', secs * 360);
  minHand.style.setProperty('--rotation', mins * 360);
  digClock.innerHTML = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  date.innerHTML = `${currentDate.getDate()} ${currentDate.toLocaleString(
    'default',
    { month: 'short' }
  )}`;
};

setClock();
setInterval(setClock, 1000);
