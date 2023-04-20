const imgCont = document.querySelector(".container");

const url = "https://randomfox.ca/";

const createImg = (imgLink) => {
  const img = document.createElement("img");
  img.src = imgLink;
  imgCont.appendChild(img);
};

fetch(`${url}floof/`)
  .then((response) => response.json())
  .then((data) => createImg(data.image))
  .catch((error) => alert(error));

const showText = (text) => {
  let a = document.querySelector(".par");
  a.innerHTML = text;
};

const myPromise = new Promise((resolve, reject) => {
  let nbr = 0;

  if (nbr === 0) {
    resolve("Ok");
  } else {
    reject("error");
  }
});

myPromise.then((value) => showText(value)).catch((error) => showText(error));

const request = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const finalResponse = await response.json();
  console.log(finalResponse);
};
