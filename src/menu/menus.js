import menus from "./menus.json"


export default function expandMenus (e, selection) {
  const menu = document.querySelector(".menus-container");
  let menuContent = document.querySelector(".menu-content");

  // first expand and scroll to it to the top
  if (menu.classList.contains("collapsed")) {
    menu.classList.remove("collapsed");
    window.scrollBy({ top: resized, left: 0, behavior: 'smooth' });
  }
 
  menu.addEventListener("transitionend", (e) =>  buildMenus(e, selection) );

  if ( !menu.classList.contains("expand")) {
    menu.classList.add("expand");
  } else {
    menuContent.classList.remove("display");
    menu.classList.remove("expand");

    setTimeout(() => {
      menu.classList.add("expand");
      menuContent.classList.add("display");
    }, 1000)
  }
}



// Build the menus on demand from JSON 
function buildMenus(e, selection="lunch") {
  e.preventDefault();
  let menuContent = document.querySelector(".menu-content");
  menuContent.innerHTML = "";
  menuContent.classList.add("display");

  let title = document.createElement("h2");
  
  title.classList.add("menu-title");
  title.textContent = selection;
  menuContent.append(title);

  menus[selection].forEach(element => {

    let item = document.createElement("div");
    let dish = document.createElement("div");
    let description = document.createElement("div");
    let price = document.createElement("div");

    item.classList.add("menu-item");
    dish.classList.add("dish-name");
    description.classList.add("dish-description");
    price.classList.add("dish-price");

    dish.textContent = element.dish;
    description.textContent = element.description;
    price.textContent = element.price;

    item.append(dish);
    item.append(description);
    item.append(price);
    menuContent.append(item);
  });

}

  let resized = null;
  let menuContent = null;

document.addEventListener('DOMContentLoaded', () => {
  if (resized === null) {
    resized = window.innerHeight + (window.innerHeight * 0.1);
  } else {
    resized = document.querySelector(".menu").scrollHeight + document.querySelector(".option-bar").scrollHeight;
  }
  menuContent = document.querySelector(".menu-content");
  
  
})

