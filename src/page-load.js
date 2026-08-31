import tacoSrc from "./taco.png";

const nav = document.querySelector("nav");

const restaurantName = document.createElement("h1");

restaurantName.textContent = "Juanfranco's Restaurant";

nav.prepend(restaurantName);

export default function loadHomeContent() {


const content = document.getElementById("content");

content.innerHTML = "";


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

  