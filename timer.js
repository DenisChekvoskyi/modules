const timer = (id, endTime) => {
  const addZeroInTimer = (num) => {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

  const getTimeRemaining = (endTime) => {
    const t = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      seconds,
      minutes,
      hours,
      days,
    };
  };

  const setClock = (selector, endTime) => {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endTime);

      days.textContent = addZeroInTimer(t.days);
      hours.textContent = addZeroInTimer(t.hours);
      minutes.textContent = addZeroInTimer(t.minutes);
      seconds.textContent = addZeroInTimer(t.seconds);

      if (t.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        clearInterval(timeInterval);
      }
    }
  };

  setClock(id, endTime);
};
export default timer;
