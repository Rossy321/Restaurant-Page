import chickenSrc from "./chicken-taco.png"  
import beefSrc from "./beef-taco.png"
import fishSrc from "./fish-taco.png"
export default function menu() {
    
    const menu = document.getElementById("content");

    menu.innerHTML = "";

    const header = document.createElement("h1");

    header.textContent = "Menu";

    menu.appendChild(header);

    const menuItems = document.createElement("div");

    menuItems.classList.add("menuItems");

    
    const chickenTaco = document.createElement("div");
    chickenTaco.classList.add("chicken-taco");

    const chickenImg = document.createElement("img");
    chickenImg.classList.add("menu-img");
    chickenImg.src =  chickenSrc;
    chickenImg.alt = "Chicken Taco";
    chickenImg.classList.add("menuItem");


    const chickenTacoHed = document.createElement("h2");
    chickenTacoHed.textContent = ("Chicken Taco");

    const chickenTacoPrice = document.createElement("p");
    chickenTacoPrice.textContent = "£5.00";

    chickenTaco.append(chickenImg, chickenTacoHed, chickenTacoPrice);

    menuItems.appendChild(chickenTaco);


     const beefTaco = document.createElement("div");
     beefTaco.classList.add("beef-taco");

    const beefImg = document.createElement("img");
    beefImg.classList.add("menu-img");
    beefImg.src =  beefSrc;
    beefImg.alt = "Beef Taco";
    beefImg.classList.add("menuItem");


    const beefTacoHed = document.createElement("h2");
    beefTacoHed.textContent = ("Beef Taco");

    const beefTacoPrice = document.createElement("p");
    beefTacoPrice.textContent = "£5.00";

    beefTaco.append(beefImg, beefTacoHed, beefTacoPrice);

    menuItems.appendChild(beefTaco);


    const fishTaco = document.createElement("div");
     fishTaco.classList.add("fish-taco");

    const fishImg = document.createElement("img");
    fishImg.classList.add("menu-img");
    fishImg.src =  fishSrc;
    fishImg.alt = "Fish Taco";
    fishImg.classList.add("menuItem");


    const fishTacoHed = document.createElement("h2");
    fishTacoHed.textContent = ("Fish Taco");

    const fishTacoPrice = document.createElement("p");
    fishTacoPrice.textContent = "£5.00";

    fishTaco.append(fishImg, fishTacoHed, fishTacoPrice);

    menuItems.appendChild(fishTaco);


    
    const veganTaco = document.createElement("div");
     veganTaco.classList.add("fish-taco");

    const veganImg = document.createElement("img");
    veganImg.classList.add("menu-img");
    veganImg.src =  fishSrc;
    veganImg.alt = "Fish Taco";
    veganImg.classList.add("menuItem");


    const veganTacoHed = document.createElement("h2");
    veganTacoHed.textContent = ("Vegan Taco");

    const veganTacoPrice = document.createElement("p");
    veganTacoPrice.textContent = "£5.00";

    veganTaco.append(veganImg, veganTacoHed, veganTacoPrice);

    menuItems.appendChild(veganTaco);

    menu.appendChild(menuItems);


}