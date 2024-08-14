
import tiktok48 from "../tiktok-48.svg";
import twitter48 from "../twitter-circle-48.svg";
import instagram48 from '../instagram-48.svg';
import facebook48 from '../facebook-48.svg';


export default function addFooter () {
  const contents = document.querySelector("#content");
  const footer = document.createElement("footer");
  const container = document.createElement("div");
  const location = document.createElement("div");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  const social = document.createElement("div");
  const icons = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");


  footer.className = "footer";
  container.className = "footer-container"; 
  location.className = "location";
  li1.className = "name title";
  li1.textContent = "Modern Restaruant";
  li2.innerHTML = "678 Market Street <br>San Francisco, CA";
  li3.textContent = "415-678-9435";
  social.className = "social";
  icons.className = "social-icons";
  
  img1.src = facebook48;
  img2.src = twitter48;
  img3.src = instagram48;
  img4.src = tiktok48;

  contents.append(footer); 
  footer.append(container);
  container.append(location);
  location.append(ul);
  ul.append(li1);
  ul.append(li2);
  ul.append(li3);

  container.append(social);
  social.append(icons);
  icons.append(img1);
  icons.append(img2);
  icons.append(img3);
  icons.append(img4);
}