import tacoSrc from "./taco.png";
export default function loadHomeContent() {

const content = document.getElementById("content");

const header = document.createElement("h1");

header.textContent = "Juanfranco's Restaurant"

content.appendChild(header);

const para1 = document.createElement("p");

para1.textContent = "We serve the best darn tacos around. They rule!";

content.appendChild(para1);

const tacoImage = document.createElement("img");
content.appendChild(tacoImage);

tacoImage.src = tacoSrc;
tacoImage.alt = "A plate of tacos";

tacoImage.width = 300;
tacoImage.height = 200;

}

  