import facebook24 from '../facebook-24.svg';
import instagram24 from '../instagram-24.svg';
import twitter24 from "../twitter-circle-24.svg";
import tiktok24 from "../tiktok-24.svg";



export default function addNavigation() {
  createNav();
  createSliderMenu();
}

function createSliderMenu() {
  const nav = document.querySelector(".nav-content");
  const title = document.createElement("div");
  const item1 = document.createElement("div");
  const item2 = document.createElement("div");
  const item3 = document.createElement("div");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");
  const location = document.createElement("div");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const social = document.createElement("div");
  const icons = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");

  title.className = "title";
  item1.className = "nav-item";
  item2.className = "nav-item";
  item3.className = "nav-item";
  btn1.textContent = "Home";
  btn2.textContent = "Menu";
  btn3.textContent = "About";
  location.className = "location";
  social.className = "social";
  icons.className = "social-icons";
  title.textContent = "Modern Restaurant";
  btn3.setAttribute("id", "aboutBtn");
  btn1.setAttribute("id", "homeBtn");
  btn2.setAttribute("id", "menuBtn");
  li1.innerHTML = "678 Market Street <br/>San Francisco, CA";
  li2.textContent = "415-678-9435";
  img1.src = facebook24;
  img2.src = twitter24;
  img3.src = instagram24;
  img4.src = tiktok24;

  nav.append(title);
  nav.append(item1);
  nav.append(item2);
  nav.append(item3);
  item1.append(btn1);
  item2.append(btn2);
  item3.append(btn3);
  nav.append(location);
  location.append(ul);
  ul.append(li1);
  ul.append(li2);
  nav.append(social);
  social.append(icons);
  icons.append(img1);
  icons.append(img2);
  icons.append(img3);
  icons.append(img4);
}

function createNav() {
  const nav = document.querySelector(".nav");
  const btn = document.createElement("button");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");

  nav.append(btn);
  btn.append(span1);
  btn.append(span2);
  btn.append(span3);

  btn.className = "btn-nav";
  span1.className = "icon-bar up";
  span2.className = "icon-bar middle";
  span3.className = "icon-bar down";
}


function slide (e) {
  e.preventDefault();

  if (navContent.classList.contains("initial")) {
    navContent.classList.add('showNav');
    navContent.classList.remove("initial");
  }

  navContent.classList.toggle('hideNav');
  navContent.classList.toggle('showNav');
  navContent.classList.remove('hidden');
  btnNav.classList.toggle('animated');
}