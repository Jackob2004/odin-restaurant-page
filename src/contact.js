const styleClassName = "content-contact";

/**
 * @typedef {Object} ContactData
 * @property {string} heading
 * @property {string} description
 * @property {string} phone
 * @property {string} email
 */

/**
 *
 * @type ContactData
 */
const contactData = {
    heading: "Get in Touch!",
    description: "We love hearing from our fellow burger enthusiasts.\
                  Reach out to us with questions, compliments, or to plan your visit!",
    phone: "Phone: (555) 123-BURG (2874)",
    email: "Email: info@holycowburgers.com",
};

/**
 * @param {ContactData} data
 * @returns {HTMLDivElement}
 */
function generateContactCard(data) {
    const card = document.createElement("div");
    const heading = document.createElement("h3");
    const desc = document.createElement("p");
    const phone = document.createElement("p");
    const email = document.createElement("p");

    heading.textContent = data.heading;
    desc.textContent = data.description;
    phone.textContent = data.phone;
    email.textContent = data.email;

    card.append(heading, desc, phone, email);

    card.setAttribute("class", "contact-card");

    return card;
}

/**
 *
 * @returns {HTMLDivElement[]}
 */
function generatePageContent() {
    return [generateContactCard(contactData)];
}

export {generatePageContent, styleClassName};