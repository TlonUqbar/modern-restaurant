
export default function aboutUs (container) {
  const top = container;
  const section = document.createElement("section");
  const leftSide = document.createElement("div");
  const rightSide = document.createElement("div");
  const sectionContent = document.createElement("div");
  const h1 = document.createElement("h1");
  const pTag1 = document.createElement("p");
  const pTag2 = document.createElement("p");
  const pTag3 = document.createElement("p");
  
  section.setAttribute("id", "our-story");
  leftSide.className = "about-left";
  rightSide.className = "about-right";
  sectionContent.className = "section-content";
  h1.textContent = "Our Story";
  pTag1.textContent = 'Modern Restaurant aim is to celebrate people, places and "la joie de vivre". Located in the heart of San Francisco, Modern Restaurant brings a vibrant glamour to the dining scene. Striking views and elegant interiors meet warm and assured service.';
  pTag2.textContent = "Taking inspiration from modern world cuisines, Head Chef Moderna's menu is fresh, seasonal and produce-driven; sourcing the finest local ingredients and letting them speak for themselves.";
  pTag3.textContent = 'Modern Restaurant continues to forge its way as an industry leader, by partnering with local Farms, we are afforded the rare opportunity to help shape the selection of those crops and are ever-grateful for their impact and influence on the restaurants.';

  top.append(section);
  section.append(leftSide);
  section.append(rightSide);
  rightSide.append(sectionContent);
  sectionContent.append(h1);
  sectionContent.append(pTag1);
  sectionContent.append(pTag2);
  sectionContent.append(pTag3);
}