let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

date.textContent = currentDate;
year.textContent = currentYear;

let cardsList = document.querySelector(".cards");
const cards = [
  { title: "CatPhotoApp", url: "CatPhotoApp/my_repsotory/index.html" },
  { title: "Coffee", url: "CSS Module/css intro/coffee/index.html" },
  { title: "MarioClub", url: "Css Module/CSSmodule/index.html" },
  { title: "Agent P", url: "html-css_final_assignment/index.html" },
  {
    title: "How to fetch API",
    url: "JS advanced Module/how_to_fetch_API/index.html",
  },
  { title: "Memory Game", url: "JS advanced Module/memorygame/index.html" },
  { title: "Button", url: " JS module/button/index.html" },
  {
    title: "Sign in Form",
    url: "JS module/crash course/crash-course/index.html",
  },
  {
    title: "Debugging 101",
    url: "JS module/crash course/debugging-1100-main/debug/index.html",
  },
  { title: "Debug 2", url: "JS module/debug2/index.html" },
  { title: "Debug 3", url: "JS module/debug3/index.html" },
  { title: "List Program", url: "JS module/listProgram/index.html" },
  { title: "Quiz Application", url: "JS module/Quiz_Application/index.html" },
];

for (let i = 0; i < cards.length; i++) {
  let card = document.createElement("div");

  card.className = "card";
  cardsList.appendChild(card);

  let cardInner = document.createElement("div");

  cardInner.className = "card-inner";
  card.appendChild(cardInner);

  let cardFront = document.createElement("div");

  cardFront.className = "card-front";
  cardInner.appendChild(cardFront);

  let title = document.createElement("h2");

  title.className = "title";
  cardFront.appendChild(title);
  title.textContent = cards[i].title;

  let cardBack = document.createElement("div");

  cardBack.className = "card-back";
  cardInner.appendChild(cardBack);

  let link = document.createElement("a");

  link.className = "url";
  cardBack.appendChild(link);
  link.textContent = "Project Link";
  link.href = cards[i].url;
}
