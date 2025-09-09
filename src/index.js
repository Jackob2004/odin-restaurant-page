import "./reset.css";
import "./styles.css";
import * as home from "./home.js";

const contentContainer = document.querySelector("#content");

window.addEventListener("load", () => {
    home.generatePageContent().forEach(card => contentContainer.appendChild(card));
});