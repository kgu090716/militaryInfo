import config from '../config.js';

const name = config.name;
const endYear = config.endYear;
const endMonth = config.endMonth;
const endDay = config.endDay;
const endHour = config.endHour;
const endMinute = config.endMinute;
const endSecond = config.endSecond;

document.title = `${name} 군대 전역일`;

function dateFunc() {
  const dateA = new Date();
  const dateB = new Date(`${endYear}/${endMonth}/${endDay} ${endHour}:${endMinute}:${endSecond}`);
  const diffMSec = dateB.getTime() - dateA.getTime();
  const diffDate = parseInt(diffMSec / (24 * 60 * 60 * 1000));
  const diffHour = parseInt(diffMSec / (60 * 60 * 1000) % 24);
  const diffMinute = parseInt((diffMSec / (60 * 1000)) % 60);
  const diffSecond = parseInt((diffMSec / (1000)) % 60);

  const el = document.querySelector('.content');
  if(diffHour < 0 || diffMinute < 0 || diffSecond < 0) {
    el.innerHTML = `<h1>${endYear}-${endMonth}-${endDay} 전역!!!</h1>
      <p>수고했어!!!</p>
      <a type="button" href="index.html" class="btn btn-outline-dark"><i class="fa-solid fa-house"></i> HOME</a>`;
  } else {
    el.innerHTML = `<h1>${name} 군대 전역 남은 시간</h1>
      <p><${endYear}-${endMonth}-${endDay}></p>
      <p>${diffDate}일 ${diffHour}시간 ${diffMinute}분 ${diffSecond}초</p>
      <a type="button" href="index.html" class="btn btn-outline-dark"><i class="fa-solid fa-house"></i> HOME</a>`;
  }
}
dateFunc();
setInterval(dateFunc, 1000);