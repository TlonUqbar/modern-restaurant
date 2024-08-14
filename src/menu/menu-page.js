import addNavigation from "../common/nav.js";
import addFooter from "../common/footer.js";
import expandMenus from "./menus.js";


export default function menuPage() {
  // addNavigation();
  buildMenuPage();
  addFooter();
}

function buildMenuPage() {
  const content = document.querySelector("#content");
  const section = document.createElement("section");
  const menuLeft = document.createElement("div");
  const menuRight = document.createElement("div");
  const leftContent = document.createElement("div");
  const wrap = document.createElement("div");
  const h1 = document.createElement("h1");
  const pTag1 = document.createElement("p");
  const pTag2 = document.createElement("p");
  const pTag3 = document.createElement("p");
  const bar = document.createElement("div");
  const item1 = document.createElement("a");
  const item2 = document.createElement("a");
  const item3 = document.createElement("a");
  const item4 = document.createElement("a");
  const menus = document.createElement("div");
  const container = document.createElement("div");
  const menu = document.createElement("div");

  content.innerHTML = "";

  section.className = "menu";
  menuLeft.className = "menu-left";
  leftContent.className = "left-content";
  menuRight.className = "menu-right";
  bar.className = "option-bar";
  item1.className = "option-item";
  item1.setAttribute("id", "lunch");
  item1.textContent = "Lunch";
  item2.className = "option-item";
  item2.setAttribute("id", "dinner");
  item2.textContent = "Dinner";
  item3.className = "option-item";
  item3.setAttribute("id", "brunch");
  item3.textContent = "Brunch";
  item4.className = "option-item";
  item4.setAttribute("id", "drinks");
  item4.textContent = "Drinks";
  h1.textContent = "Menu";
  pTag1.textContent = "Modern Restaurant is a progression of rare and beautiful ingredients where texture, flavour and harmony is paramount.";
  pTag2.textContent = "Continually inspired by nature, the creative process for chef Sofia Moderna begins in working closely with the farmers, fishermen, producers and artisans who cultivate bespoke produce exclusively for Modern Restaurant. ";
  pTag3.textContent = "For each dish, the growth of every element and the selection of every ceramic piece is carefully considered and crafted for its role in the dining experience.";
  menus.className = "menus";
  container.className = "menus-container collapsed";
  menu.className = "menu-content";

  content.append(section);
  section.append(menuLeft);
  section.append(menuRight);
  menuLeft.append(leftContent);
  leftContent.append(h1);
  leftContent.append(wrap);
  wrap.append(pTag1);
  wrap.append(pTag2);
  wrap.append(pTag3);
  content.append(bar);
  bar.append(item1);
  bar.append(item2);
  bar.append(item3);
  bar.append(item4);
  content.append(menus);
  menus.append(container);
  container.append(menu);

  addEventListeners();
  // window.scrollBy({ top: 0, left: 0, behavior: 'smooth' });
  window.scrollTo(0, 0);
}

function addEventListeners() {
  const lunchMenu = document.querySelector("#lunch");
  const dinnerMenu = document.querySelector("#dinner");
  const brunchMenu = document.querySelector("#brunch");
  const drinksMenu = document.querySelector("#drinks");


  lunchMenu.addEventListener("click", (e) => expandMenus(e,"lunch"));
  dinnerMenu.addEventListener("click", (e) => expandMenus(e, "dinner"));
  brunchMenu.addEventListener("click", (e) => expandMenus(e, "brunch"));
  drinksMenu.addEventListener("click", (e) => expandMenus(e, "drinks") );
}

