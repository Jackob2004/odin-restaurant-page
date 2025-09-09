// module responsible for generating home page content

/**
 *
 * @type {[{heading: string, content: string}]}
 */
const simpleCardData = [
    {
        heading: "About us",
        content: "We’re not kidding. We’ve dedicated ourselves to a singular, stellar mission: \
                  crafting the most out-of-this-world burgers you’ll ever taste. \
                  From our legendary beef patties to our cosmic shakes, every bite is a journey. \
                  Come down to Earth and taste the difference."
    },
    {
        heading: "Our story",
        content: "It began with a quest for the perfect burger. Our founder, \
                  a backyard grill master with impossibly high standards, was tired of mediocre patties. \
                  He started grinding his own beef blend, baking buns daily, and crafting signature sauces.\
                  The result was a burger so delicious, the only words people could muster were \"Holy Cow!\" \
                  The name stuck. That simple pursuit of perfection, right down to the last pickle,\
                  is what still drives us today. We didn't search the galaxy for the best burger.\
                  We built it right here."
    },
    {
        heading: "Location",
        content: "We're located right on the corner of Celestial Ave and Orbit Street, \
                  with plenty of parking in the rear. We can't wait to see you!"
    },
];

/**
 * representing heading and list items
 * @type {{heading: string, elements: string[]}}
 */
const complexCardData = {
    heading: "Hours",
    elements: ["Monday - Thursday: 11:00 AM - 9:00 PM", "Friday - Saturday: 11:00 AM - 10:00 PM",
               "Sunday: 12:00 PM - 8:00 PM"]
};

