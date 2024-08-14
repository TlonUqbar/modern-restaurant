import addNavigation from "../common/nav.js";
import addFooter from "../common/footer.js";
import aboutUs from "./our-story.js";
import team from './team.js'
import info from './info.js';

export default function aboutPage () {
  buildAboutPage();
  addFooter();
}

function buildAboutPage () {
  const content = document.querySelector("#content");
  const aboutContainer = document.createElement("div");
  
  content.innerHTML = "";
  aboutContainer.className = "about";
  content.append(aboutContainer);
  
  aboutUs(aboutContainer);
  team(aboutContainer);
  info(aboutContainer);
  window.scrollTo(0, 0);
}