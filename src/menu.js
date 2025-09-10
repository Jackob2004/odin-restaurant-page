import burger1 from "/assets/burger1.jpg";
import burger2 from "/assets/burger2.jpg";
import burger3 from "/assets/burger3.jpg";
import burger4 from "/assets/burger4.jpg";
import burger5 from "/assets/burger5.jpg";

const styleClassName = "content-menu";

/**
 * @type {Array<{imgPath: string, name: string, description: string, price: string}>}
 */
const menuCardsData = [
    {
        imgPath: burger1,
        name: "The Classic Celestial",
        description: "The one that started it all. Double beef, cheese, lettuce, tomato, \
                      onion, and our signature sauce",
        price: "27$"
    },
    {
        imgPath: burger2,
        name: "The Big Bang Blue",
        description: "A flavor explosion with tangy blue cheese, crispy bacon, and caramelized onions.",
        price: "29$"
    },
    {
        imgPath: burger3,
        name: "The Apollo Eleven",
        description: "Our flagship: eleven ounces of prime beef, smoked cheddar, onion rings, and BBQ sauce.",
        price: "35$"
    },
    {
        imgPath: burger4,
        name: "The Martian",
        description: "VEGGIE Our famous house-made beet & black bean patty with avocado and spicy mayo.",
        price: "20$"
    },
    {
        imgPath: burger5,
        name: "The Nebula",
        description: "A swirl of flavors with Swiss cheese, sautéed mushrooms, and garlic aioli.",
        price: "22$"
    },
];

/**
 *
 * @param {string} imgPath
 * @param {string} name
 * @param {string} description
 * @param {string} price
 * @returns {HTMLDivElement}
 */
function generateMenuCard(imgPath, name, description, price) {
    const card = document.createElement("div");
    const imgWrapper = document.createElement("div");
    const img = document.createElement("img");

    const contentWrapper = document.createElement("div");

    const heading = document.createElement("h3");
    const desc= document.createElement("p");
    const priceTag = document.createElement("p");

    img.src = imgPath;
    heading.textContent = name;
    desc.textContent = description;
    priceTag.textContent = price;

    imgWrapper.appendChild(img);
    contentWrapper.append(heading, desc, priceTag);
    card.appendChild(imgWrapper);
    card.appendChild(contentWrapper);

    return card;
}

/**
 *
 * @returns {HTMLDivElement[]}
 */
function generatePageContent() {
    const cards = [];

    for (const data of menuCardsData) {
        cards.push(generateMenuCard(data.imgPath, data.name, data.description, data.price));
    }

    cards.forEach(card => card.classList.add("menu-card"));

    return cards;
}

export {generatePageContent, styleClassName};