import "./reset.css";
import "./styles.css";
import * as home from "./home.js";
import * as menu from "./menu.js";

const contentContainer = document.querySelector("#content");

window.addEventListener("load", () => {
    home.generatePageContent().forEach(card => contentContainer.appendChild(card));
});

document.querySelector("#btn-home").addEventListener("click", () => {
    contentContainer.replaceChildren(...home.generatePageContent());
});

document.querySelector("#btn-menu").addEventListener("click", () => {
    contentContainer.replaceChildren(...menu.generatePageContent());
});