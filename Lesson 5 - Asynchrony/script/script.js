let btnStopTime = document.querySelector("#stpTime");
let btnStopInter = document.querySelector("#stpInter");
let btnStartTime = document.querySelector("#startTime");
let btnStartInter = document.querySelector("#startInter");

const three = () => {
  console.log("3");
};
console.log("1");
console.log("2");
const timeout = setTimeout(three, 2000);

console.log("4");
console.log("5");

let itr = 0;
const inter = setInterval(() => {
  itr++;
  console.log(itr);
}, 1000);

const stopTimeout = () => {
  clearTimeout(timeout);
};
const stopInterval = () => {
  clearInterval(inter);
};
btnStopTime.addEventListener("click", stopTimeout);
btnStopInter.addEventListener("click", stopInterval);

const url = "https://api.chucknorris.io/jokes/random";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data.value))
  .catch((err) => console.log(err));

const ShowText = () => {
  let textDiv = document.createElement("div");
  setTimeout(() => {
    textDiv.innerText = "BYłem ukryta a teraz mnie widać";
    textDiv.style.border = "2px dashed red";
    textDiv.style.padding = "10px";
    document.body.appendChild(textDiv);
    document.body.style.background = "white";
  }, 5000);
};
