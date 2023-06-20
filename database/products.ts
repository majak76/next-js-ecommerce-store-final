import { cache } from 'react';
import { Product } from '../migrations/1686575730-createTableProducts';
import { sql } from './connect';

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT * FROM products
 `;

  return products;
});

export const getProductsWithLimitAndOffset = cache(
  async (limit: number, offset: number) => {
    const products = await sql<Product[]>`
      SELECT
        *
      FROM
        products
      LIMIT ${limit}
      OFFSET ${offset}
    `;

    return products;
  },
);

export const getProductsWithLimitAndOffsetBySessionToken = cache(
  async (limit: number, offset: number, token: string) => {
    const products = await sql<Product[]>`
      SELECT
        products.*
      FROM
        products
      INNER JOIN
        sessions ON (
          sessions.token = ${token} AND
          sessions.expiry_timestamp > now()
          -- sessions.user_id = animals.user_id
        )
      -- This would JOIN the users table that is related to animals
      -- INNER JOIN
      --   users ON (
      --     users.id = animals.user_id AND
      --     sessions.user_id = users.id
      --   )
      LIMIT ${limit}
      OFFSET ${offset}
    `;

    return products;
  },
);

export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
    products
    WHERE
      id = ${id}
  `;
  return product;
});

export const createProduct = cache(
  async (firstName: string, price: number, type: string, text: string) => {
    const [product] = await sql<Product[]>`
      INSERT INTO products
        (first_name, type, price, text)
      VALUES
        (${firstName}, ${type}, ${price}, ${text || null})
      RETURNING *
    `;

    return product;
  },
);

export const updateProductlById = cache(
  async (
    id: number,
    firstName: string,
    price: number,
    type: string,
    text: string,
  ) => {
    const [product] = await sql<Product[]>`
      UPDATE products
      SET
        first_name = ${firstName},
        type = ${type},
        price= ${price},
        text = ${text}
      WHERE
        id = ${id}
        RETURNING *
    `;

    return product;
  },
);

export const deleteProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    DELETE FROM
      products
    WHERE
      id = ${id}
    RETURNING *
  `;
  return product;
});

// export const createProduct = cache(async (id: number, firstName: string) => {
//   const [products] = await sql`
//     SELECT
//       *
//     FROM
//       products
//     WHERE
//       id = ${id}
//   `;

//   return products[0];
// });

// export const createProduct = cache(
//   async (username: string, passwordHash: string) => {
//     console.log(passwordHash);
//     const [product] = await sql<User[]>`
//     INSERT INTO products
//       (username, password_has h)
//     VALUES
//       (${username.toLowerCase()}, ${passwordHash})
//     RETURNING
//       id,
//       username
//  `;

//     return product;
//   },
// );

// This data is now coming from the database
// export const products = [
//   {
//     id: 1,
//     firstName: 'Luther',
//     price: 19,
//     type: 'burger',
//     text: "With more than 1000 calories and usually over 45 grams of fat per serving, Luther burger is one of the world's unhealthiest burgers, but its flavors and a unique combination of ingredients make up for it. The standard burger bun is replaced by a sliced, sugar-glazed donut (usually a Krispy Kreme).Aside from that, Luther is basically a cheeseburger topped with bacon, and it is typically served without vegetables or condiments. Many people believe that it was invented at Mulligan's Bar in Georgia, when the cook ran out of standard hamburger buns and used donuts instead.",
//   },
//   {
//     id: 2,
//     firstName: 'Ainsworth',
//     price: 18,
//     type: 'burger',
//     text: 'The Mac & Cheese Burger is a thing of pure insanity. It features a panko-crusted mac & cheese patty, topped with a beef patty, topped with more mac & cheese. The cheese makes the patty hard to find, but once beef meets tongue it is a pure bliss. The bun was shockingly able to hold its own against the deluge of melted cheese, noodles and meat..',
//   },
//   {
//     id: 3,
//     firstName: 'Mexican-chorizo-garlic-shrimp',
//     price: 18,
//     type: 'burger',
//     text: "Loaded with creamy guacamole, pickled onions, and spicy cheese, this Mexican chorizo burger is dripping with flavor! The patties are crafted with a blend of beef and chorizo sausage and are perfect for topping with your favorite Mexican flavors.Everyone knows chorizo and shrimp are in love, and there's no reason why this romance wouldn't extend deliciously into the world of burgers. A burger that compromises between land and sea without being wishy-washy.",
//   },
//   {
//     id: 4,
//     firstName: 'Bacon-Whiskey',
//     price: 18,
//     type: 'burger',
//     text: " We won't ask for your ID when ordering new Whisky Bacon Burger! This is a busy burger, so hold onto your napkins (at least five) and let's get to eatin'. The burger is placed on top of bacon and caramelized onions, which sear into the patty on a hot flat top grill. Then we get down to business. More bacon, crunchy onions, pepper jack, and a potent potable whisky-infused steak sauce bring this bad boy home.",
//   },
// ];
