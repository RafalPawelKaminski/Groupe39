let users = [
  {
    userName: "Arek",
    userAge: 23,
    userEmail: "arek.aa@gmail.com",
  },
  {
    userName: "Marek",
    userAge: 33,
    userEmail: "marek.aa@gmail.com",
  },
  {
    userName: "Jurka",
    userAge: 45,
    userEmail: "jurek.aa@gmail.com",
  },
];

users.forEach((user) => {
  console.log(user.userAge + 1);
});

users = users.map((user) =>
  user.userName === "Jurka" ? { ...user, userName: "Jurek" } : user
);

let searchAfter25 = users.filter((user) => {
  if (user.userAge > 25) {
    console.log("Użytkownik", user.userName, "jest Starszy niż 25 lat");
  } else {
    console.log(`Użytkownik ${user.userName} jest Młodszy niż 25 lat`);
  }
});

let sumAllAges = users.reduce((prevAge, user) => {
  return prevAge + user.userAge;
}, 0);

console.log(sumAllAges);
