
export default function team (container) {
  const mid = container;
  const section = document.createElement("section");
  const teamLeft = document.createElement("div");
  const teamRight = document.createElement("div");
  const sectionContent = document.createElement("div");
  const h2 = document.createElement("h2");
  const pTag1 = document.createElement("p");
  const pTag2 = document.createElement("p");
  const pTag3 = document.createElement("p");

  section.setAttribute("id", "the-team");
  teamLeft.className = "team-left";
  teamRight.className = "team-right";
  sectionContent.className= "section-content";
  h2.textContent = "Meet the Team";
  pTag1.textContent = "Our team is a carefully curated ensemble of culinary artisans, each bringing their unique expertise and dedication to the table.";
  pTag2.textContent = "Every member of our team shares a common goal: to create an extraordinary dining experience that lingers in your memory. We are united by our love for the art of fine dining and our commitment to maintaining the highest standards in everything we do. We believe that our team's passion, skill, and dedication are the true ingredients of our success.";
  pTag3.textContent = "Our front-of-house team is committed to providing impeccable service that matches the quality of our cuisine. From the moment you step through our doors, our service team ensures a seamless, memorable experience, attending to every detail with grace and professionalism.";

  mid.append(section);
  section.append(teamLeft);
  section.append(teamRight);
  teamLeft.append(sectionContent);
  sectionContent.append(h2);
  sectionContent.append(pTag1);
  sectionContent.append(pTag2);
  sectionContent.append(pTag3);
}