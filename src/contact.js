const styleClassName = "content-contact";

/**
 *
 * @type {{heading: string, description: string, phone: string, email: string}}
 */
const contactData = {
    heading: "Get in Touch!",
    description: "We love hearing from our fellow burger enthusiasts.\
                  Reach out to us with questions, compliments, or to plan your visit!",
    phone: "Phone: (555) 123-BURG (2874)",
    email: "Email: info@holycowburgers.com",
};

/**
 *
 * @returns {HTMLDivElement}
 */
function generatePageContent() {
    const card = document.createElement("div");
    const heading = document.createElement("h3");
    const desc = document.createElement("p");
    const phone = document.createElement("p");
    const email = document.createElement("p");

    heading.textContent = contactData.heading;
    desc.textContent = contactData.description;
    phone.textContent =  contactData.phone;
    email.textContent =  contactData.email;

    card.append(heading, desc, phone, email);

    return card;
}

export {generatePageContent, styleClassName};