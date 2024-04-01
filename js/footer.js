import config from "../config.js";

const footerText = config.footerText;
const footer = document.querySelector('footer > .footerText');
footer.innerText = footerText;