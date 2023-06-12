import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    firstName: 'Luther',
    price: 19,
    type: 'burger',
    text: "With more than 1000 calories and usually over 45 grams of fat per serving, Luther burger is one of the world's unhealthiest burgers, but its flavors and a unique combination of ingredients make up for it. The standard burger bun is replaced by a sliced, sugar-glazed donut (usually a Krispy Kreme).Aside from that, Luther is basically a cheeseburger topped with bacon, and it is typically served without vegetables or condiments. Many people believe that it was invented at Mulligan's Bar in Georgia, when the cook ran out of standard hamburger buns and used donuts instead.",
  },
  {
    id: 2,
    firstName: 'Ainsworth',
    price: 17,
    type: 'burger',
    text: 'The Mac & Cheese Burger is a thing of pure insanity. It features a panko-crusted mac & cheese patty, topped with a beef patty, topped with more mac & cheese. The cheese makes the patty hard to find, but once beef meets tongue it is a pure bliss. The bun was shockingly able to hold its own against the deluge of melted cheese, noodles and meat..',
  },
  {
    id: 3,
    firstName: 'Mexican-chorizo-garlic-shrimp',
    price: 18,
    type: 'burger',
    text: "Pimento cheeseburger is a traditional American version of a cheesburger originating from the South, and it's especially popular in South Carolina. It consists of soft burger buns, grilled burger patties, and pimento cheese spread. The pimento spread is made with a base of grated cheddar, mayonnaise, and pimento peppers.Once assembled, the pimento cheeseburger can be eaten as it is, although some people prefer additional toppings such as lettuce, fried onions, or tomatoes, but those are completely optional.",
  },
  {
    id: 4,
    firstName: 'Bacon-Whiskey',
    price: 18,
    type: 'burger',
    text: 'Poached burger is an American burger variety originating from Prairie du Chien, Wisconsin, and it’s made at Pete’s Hamburgers, the only place to get this burger. The meat is poached in shallow, hot water because the owner, Pete Gokey once started pouring water on the burgers to keep them moist, as the patties that sat too long would dry out.The water pan in which the meat cooks is filled with sliced onions that flavor the liquid and the patties. Once done, the meat is placed into a bakery roll with a scoop of the onions, and the burgers are usually finished with a squirt of horseradish mustard.',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
  INSERT INTO animals
   (first_name,price,type,text)
   VALUES
   (${product.firstName},${product.price}, ${product.type}, ${product.text})

`;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
DELETE FROM products

`;
  }
}
