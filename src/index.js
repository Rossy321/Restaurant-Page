import loadHomeContent from "./page-load.js";
import contact from "./contact.js";
import menu from "./menu.js";
import "./styles.css";

loadHomeContent();

const contactButton = document.querySelector(".contact");

contactButton.addEventListener("click", () => {
    contact();
});

const homeButton = document.querySelector(".home");

homeButton.addEventListener("click", () => {
    loadHomeContent();
});

const menuButton = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
    menu();
});





