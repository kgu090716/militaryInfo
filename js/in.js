import config from '../config.js';

const name = config.name;
const inYear = config.inYear;
const inMonth = config.inMonth;
const inDay = config.inDay;
const inHour = config.inHour;
const inMinute = config.inMinute;
const inSecond = config.inSecond;

document.title = `${name} 군대 입대일`;

function dateFunc() {
  const dateA = new Date();
  const dateB = new Date(`${inYear}/${inMonth}/${inDay} ${inHour}:${inMinute}:${inSecond}`);
  const diffMSec = dateB.getTime() - dateA.getTime();
  const diffDate = parseInt(diffMSec / (24 * 60 * 60 * 1000));
  const diffHour = parseInt(diffMSec / (60 * 60 * 1000) % 24);
  const diffMinute = parseInt((diffMSec / (60 * 1000)) % 60);
  const diffSecond = parseInt((diffMSec / (1000)) % 60);

  const el = document.querySelector('.content');
  if(diffHour < 0 || diffMinute < 0 || diffSecond < 0) {
    el.innerHTML = `<h1>${inYear}-${inMonth}-${inDay} 입대완료!!!</h1>
      <a href="end.html">[전역일 보기]</a>
      <br>
      <a type="button" href="index.html" class="btn btn-outline-dark"><i class="fa-solid fa-house"></i> HOME</a>`;
  } else {
    el.innerHTML = `<h1>${name} 군대 입대 남은 시간</h1>
      <p><${inYear}-${inMonth}-${inDay}></p>
      <p>${diffDate}일 ${diffHour}시간 ${diffMinute}분 ${diffSecond}초</p>
      <a type="button" href="index.html" class="btn btn-outline-dark"><i class="fa-solid fa-house"></i> HOME</a>`;
  }
}
dateFunc();
setInterval(dateFunc, 1000);