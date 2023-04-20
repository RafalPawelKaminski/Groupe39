const listForContainer = document.querySelector("#list-for");
const listForOfContainer = document.querySelector("#list-for-of");
const listForInContainer = document.querySelector("#list-for-in");
const listWhileContainer = document.querySelector("#list-while");
const listDoWhilenContainer = document.querySelector("#list-do-while");

let userArr = ["Tytus", "Romek", "Atomek"];

let bookInfo = {
  author: "Henryk Sienkiewicz",
  title: "W pustyni i w puszczy",
  relaseDate: 1911,
};

//! Pętla for

console.log("Pętla for:");
console.log("+++++++++++");
for (let a = 0; a < userArr.length; a++) {
  console.log(userArr[a]);

  //   //! Rozbudowane budowanie elementów
  createLiElement(userArr[a], listForInContainer);
  // let listEle = document.createElement("li");
  // listEle.innerText = userArr[a];
  // listForContainer.appendChild(listEle);
}
console.log("+++++++++++");
// //! Pętla for.. of
// console.log("Pętla for.. of:");
// console.log("+++++++++++");
// for (const element of userArr) {
//   console.log(element);

//   // let listEle = document.createElement("li");
//   // listEle.innerText = element;
//   // listForOfContainer.appendChild(listEle);
// }
// console.log("+++++++++++");

// //! Pętla for.. in

// console.log("Pętla for.. in:");
// console.log("+++++++++++");
// for (const element in bookInfo) {
//   console.log(`${element}: ${bookInfo[element]}`);

//   //! Rozbudowane budowanie elementów

//   // let listEle = document.createElement("li");
//   // listEle.innerText = bookInfo[element];
//   // listForInContainer.appendChild(listEle);
// }
// console.log("+++++++++++");

// //! Pętla While
// console.log("Pętla while:");
// console.log("+++++++++++");
// let n = 0;
// while (n < userArr.length) {
//   console.log(userArr[n]);

//   n++;
// }
// console.log("+++++++++++");

// //! Pętla do While
// console.log("Pętla do while:");
// console.log("+++++++++++");
// let j = 0;
// do {
//   console.log(userArr[j]);

//   j++;
// } while (j < userArr.length);
// console.log("+++++++++++");

//? Funkcja pomocnicza

function createLiElement(data, where) {
  let listEle = document.createElement("li");
  listEle.innerText = data;
  where.appendChild(listEle);
}
