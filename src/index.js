import loadHomeContent from "./page-load.js";
import contact from "./contact.js"

loadHomeContent();

const contactButton = document.querySelector(".contact");

contactButton.addEventListener("click", () => {
    contact();
});

const homeButton = document.querySelector(".home");

homeButton.addEventListener("click", () => {
    loadHomeContent();
});


