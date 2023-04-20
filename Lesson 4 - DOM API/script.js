// let par = document.getElementById("par");
// let div = document.getElementById("container");
// let anotherText = div.getElementsByClassName("text");
// let text = document.getElementsByClassName("text");

// let querPar = document.querySelector(".text");

// // querPar.style.backgroundColor = "red";
// // querPar.style.setProperty("border", "1px solid green");

// // querPar.classList.add("disabled");
// // querPar.classList.remove("text");
// const addClassDisabled = () => {
//   querPar.classList.add("disabled");
// };
// querPar.addEventListener("mouseenter", addClassDisabled);
// querPar.addEventListener("mouseleave", () => {
//   querPar.classList.remove("disabled");
// });

const userName = document.querySelector("#Name");
const addName = document.querySelector("#Add");
const userList = document.querySelector("#user-list");

const addItem = () => {
  let nameInput = userName.value;
  const listItem = document.createElement("span");
  listItem.setAttribute("data-name", userName.tagName);
  listItem.style.setProperty("color", "#f1f1f1");
  listItem.textContent = nameInput;
  userList.appendChild(listItem);
};
const addItem2 = () => {
  let nameInput = userName.value;
  userList.innerHTML = "";
};

addName.addEventListener("click", addItem);

alert("Jakiś alert");
