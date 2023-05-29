// This data is now coming from the database
export const products = [
  {
    id: 1,
    firstName: 'Luther',
    price: 19,
    type: 'burger',
    accessory: 'olive',
    text: "With more than 1000 calories and usually over 45 grams of fat per serving, Luther burger is one of the world's unhealthiest burgers, but its flavors and a unique combination of ingredients make up for it. The standard burger bun is replaced by a sliced, sugar-glazed donut (usually a Krispy Kreme).Aside from that, Luther is basically a cheeseburger topped with bacon, and it is typically served without vegetables or condiments. Many people believe that it was invented at Mulligan's Bar in Georgia, when the cook ran out of standard hamburger buns and used donuts instead.",
  },
  {
    id: 2,
    firstName: 'Olive',
    price: 17,
    type: 'burger',
    accessory: 'onion',
    text: 'Olive burger is an American burger variety originating from Michigan. It’s made with a combination of ground beef, oil, white buns, mayonnaise, and pitted green olives. In order to prepare it, the meat patties are fried, topped with a mixture of olives and mayonnaise, then placed in a burger bun with no other condiments.Some like to add a bit olive brine to the olive-mayo mix, while others put the mayonnaise on a bun, and the patties are topped with olives before they’re placed into the buns. There are many theories about the origins of this burger, and some people claim that Olympic Broil in Lansing made the first olive burger in the 1960s, while others say it was made much earlier at Kewpee Hotel Hamburgs in Grand Rapids.',
  },
  {
    id: 3,
    firstName: 'Pimento',
    price: 18,
    type: 'cheeseburger',
    accessory: 'cheese spread',
    text: "Pimento cheeseburger is a traditional American version of a cheesburger originating from the South, and it's especially popular in South Carolina. It consists of soft burger buns, grilled burger patties, and pimento cheese spread. The pimento spread is made with a base of grated cheddar, mayonnaise, and pimento peppers.Once assembled, the pimento cheeseburger can be eaten as it is, although some people prefer additional toppings such as lettuce, fried onions, or tomatoes, but those are completely optional.",
  },
  {
    id: 4,

    firstName: 'Poached',
    price: 18,
    type: 'burger',
    accessory: 'sugar-glazed donuts',
    text: 'Poached burger is an American burger variety originating from Prairie du Chien, Wisconsin, and it’s made at Pete’s Hamburgers, the only place to get this burger. The meat is poached in shallow, hot water because the owner, Pete Gokey once started pouring water on the burgers to keep them moist, as the patties that sat too long would dry out.The water pan in which the meat cooks is filled with sliced onions that flavor the liquid and the patties. Once done, the meat is placed into a bakery roll with a scoop of the onions, and the burgers are usually finished with a squirt of horseradish mustard.',
  },
];

export function getProductsById(id) {
  return products.find((product) => product.id === id);
}
