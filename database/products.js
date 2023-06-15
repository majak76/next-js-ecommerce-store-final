import { cache } from 'react';
import { sql } from './connect';

export const getProducts = cache(async () => {
  const products = await sql`SELECT * FROM products`;
  return products;
});

export const getProductById = cache(async (id) => {
  const products = await sql`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;

  return products[0];
});

// This data is now coming from the database
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
    price: 18,
    type: 'burger',
    text: 'The Mac & Cheese Burger is a thing of pure insanity. It features a panko-crusted mac & cheese patty, topped with a beef patty, topped with more mac & cheese. The cheese makes the patty hard to find, but once beef meets tongue it is a pure bliss. The bun was shockingly able to hold its own against the deluge of melted cheese, noodles and meat..',
  },
  {
    id: 3,
    firstName: 'Mexican-chorizo-garlic-shrimp',
    price: 18,
    type: 'burger',
    text: "Loaded with creamy guacamole, pickled onions, and spicy cheese, this Mexican chorizo burger is dripping with flavor! The patties are crafted with a blend of beef and chorizo sausage and are perfect for topping with your favorite Mexican flavors.Everyone knows chorizo and shrimp are in love, and there's no reason why this romance wouldn't extend deliciously into the world of burgers. A burger that compromises between land and sea without being wishy-washy.",
  },
  {
    id: 4,
    firstName: 'Bacon-Whiskey',
    price: 18,
    type: 'burger',
    text: " We won't ask for your ID when ordering new Whisky Bacon Burger! This is a busy burger, so hold onto your napkins (at least five) and let's get to eatin'. The burger is placed on top of bacon and caramelized onions, which sear into the patty on a hot flat top grill. Then we get down to business. More bacon, crunchy onions, pepper jack, and a potent potable whisky-infused steak sauce bring this bad boy home.",
  },
];

export function getProductsById(id) {
  return products.find((product) => product.id === id);
}
