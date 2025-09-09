import "./reset.css";
import "./styles.css";
import * as home from "./home.js";
import * as menu from "./menu.js";

const contentContainer = document.querySelector("#content");

window.addEventListener("load", () => {
    home.generatePageContent().forEach(card => contentContainer.appendChild(card));
});

document.querySelector("nav").addEventListener("click", (e) => {
    let nodes= null;
    let className = null;

    switch (e.target.id) {
        case "btn-home":
            nodes = home.generatePageContent();
            className = home.styleClassName;
            break;
        case "btn-menu":
            nodes = menu.generatePageContent();
            className = menu.styleClassName;
            break;
    }

    if (nodes && className) {
        contentContainer.replaceChildren(...nodes);
        contentContainer.setAttribute("class", className);
    }
});