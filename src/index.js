import {defaultPage, homePage} from "./home/home-page.js";
import menuPage from "./menu/menu-page.js";
import aboutPage from "./about/about-page.js"
import addNavigation from "./common/nav.js";
// import addFooter from "./common/footer.js";
import "./styles.css";



addNavigation();
defaultPage();

// Hamburger Menu Stuff

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const btnNav = document.querySelector('.btn-nav');
const navContent = document.querySelector('.nav-content');


const action = (e) => {
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


homeBtn.addEventListener("click", () => {  homePage()  }) 
menuBtn.addEventListener("click", () => { menuPage()  })
aboutBtn.addEventListener("click", () => { aboutPage() }) 
btnNav.addEventListener('click', (e) => action(e) );
homeBtn.addEventListener("click", (e) => action(e));
menuBtn.addEventListener("click", (e) => action(e));  
aboutBtn.addEventListener("click", (e) => action(e))




