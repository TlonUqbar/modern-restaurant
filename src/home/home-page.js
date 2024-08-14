
// import addNavigation from "../common/nav.js";
import addFooter from "../common/footer.js";


export function homePage() {
  buildHomePage();
  addFooter();
}

export function defaultPage() {
  buildHomePage();
  addFooter();
}

function buildHomePage(){
  const content = document.querySelector("#content");
  const section1 = document.createElement("section");
  const section2 = document.createElement("section");
  const home = document.createElement("div");
  const story = document.createElement("div");
  const h1 = document.createElement("h1");
  const storyText = document.createElement("div");
  const pTag1 = document.createElement("p");
  const pTag2 = document.createElement("p");
  const pTag3 = document.createElement("p");

  content.innerHTML = "";
  section1.setAttribute("id", "hero");
  section2.setAttribute("id", "story");
  section2.className = "welcome";
  home.className = "home";
  story.className = "story";
  h1.className = "title";
  h1.textContent = "Modern Restaurant";
  storyText.className = "story-text";
  pTag1.textContent = "Modern Restaurant and our casual, communal space Community Table, opened in October of 2021. The Cafeteria is anchored around a large table that opens to the Garden, where we offer seasonal outdoor seating amongst the flower beds and their pollinators.";
  pTag2.textContent = "Open Monday through Sunday to guests, highlighting our work with whole grains, preservation and butchery through breakfast, lunch and Community Table by Modern Restaurant — a family style dinner.";
  pTag3.textContent = "Reservations for Modern Restaurant and Community Table by Modern Restaurant can be made online. All sales are final and reservations cannot be canceled.  New reservations are released one month at a time on the 15th of the month prior.";

  content.append(section1);
  content.append(section2);
  section1.append(home);
  section2.append(story);
  story.append(h1);
  story.append(storyText);
  storyText.append(pTag1);
  storyText.append(pTag2);
  storyText.append(pTag3);
  window.scrollTo(0, 0);
}