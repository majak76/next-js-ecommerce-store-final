import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    firstName: 'luther',
    price: 19,
    type: 'burger',
    text: "With more than 1000 calories and usually over 45 grams of fat per serving, Luther burger is one of the world's unhealthiest burgers, but its flavors and a unique combination of ingredients make up for it. The standard burger bun is replaced by a sliced, sugar-glazed donut (usually a Krispy Kreme).Aside from that, Luther is basically a cheeseburger topped with bacon, and it is typically served without vegetables or condiments. Many people believe that it was invented at Mulligan's Bar in Georgia, when the cook ran out of standard hamburger buns and used donuts instead.",
  },
  {
    id: 2,
    firstName: 'ainsworth',
    price: 17,
    type: 'burger',
    text: 'The Mac & Cheese Burger is a thing of pure insanity. It features a panko-crusted mac & cheese patty, topped with a beef patty, topped with more mac & cheese. The cheese makes the patty hard to find, but once beef meets tongue it is a pure bliss. The bun was shockingly able to hold its own against the deluge of melted cheese, noodles and meat..',
  },
  {
    id: 3,
    firstName: 'mexican-chorizo-garlic-shrimp',
    price: 18,
    type: 'burger',
    text: "Loaded with creamy guacamole, pickled onions, and spicy cheese, this Mexican chorizo burger is dripping with flavor! The patties are crafted with a blend of beef and chorizo sausage and are perfect for topping with your favorite Mexican flavors.Everyone knows chorizo and shrimp are in love, and there's no reason why this romance wouldn't extend deliciously into the world of burgers. A burger that compromises between land and sea without being wishy-washy.",
  },
  {
    id: 4,
    firstName: 'bacon-whiskey',
    price: 18,
    type: 'burger',
    text: "We won't ask for your ID when ordering new Whisky Bacon Burger! This is a busy burger, so hold onto your napkins (at least five) and let's get to eatin'. The burger is placed on top of bacon and caramelized onions, which sear into the patty on a hot flat top grill. Then we get down to business. More bacon, crunchy onions, pepper jack, and a potent potable whisky-infused steak sauce bring this bad boy home.",
  },
  {
    id: 5,
    firstName: 'chicken-katsu-rice',
    price: 19,
    type: 'burger',
    text: 'Crispy golden brown crust enveloping juicy tender sake flavoured chicken meat between 2 perfectly pan seared brown rice patties just screams Chicken Katsu Burger. The hero of the dish is the rice. The rice should be sticky, chewy and moist enough to form a perfect rice patty without breaking apart when it’s pan seared. We would say brown rice burger patties are the new burger buns.The layers of fragrant rice patty with crispy crunchy katsu burger, tomatoes and lettuce with a generous drizzle of tonkatsu sauce plus furikake topping will please any hungry tummy! ',
  },
  {
    id: 6,
    firstName: 'the-elvis-fried-banana',
    price: 19,
    type: 'burger',
    text: " You've never had a burger quite like this before. Legend has it Elvis loved his peanut butter, bacon, and banana sandwiches, so we created this salty, sweet burger as a tribute to the king of rock 'n' roll. Piled high with creamy peanut butter, extra-crispy bacon, caramelized bananas, and a sweet honey drizzle, this totally unique combination of flavors will have you all shook up. ",
  },
  {
    id: 7,
    firstName: ' willy-wonka ',
    price: 19,
    type: 'burger',
    text: ' Bar Luca in Sydney, Australia, has cooked up the the Beauregard Burger based off the iconic 1971 film Willy Wonka and the Chocolate Factory and Wilder’s role as the titular factory owner. And the burger sounds something straight out of Wonka’s imagination. Served on a rainbow bun, it has a beef patty, tomato soup jelly, fried potatoes, popping cheese, and a secret Wonka sauce.It might not sound like the most appetizing combination of ingredients, but if Willy Wonka and the Chocolate Factory taught us anything it’s to trust the eccentric genius.',
  },
  {
    id: 8,
    firstName: 'peanut-butter-jelly',
    price: 19,
    type: 'burger',
    text: "This Peanut Butter & Jelly Burger has it all. Crispy bacon, smoked cheddar, natural peanut butter, and sweet and spicy chilli jam all top a juicy beef burger on a brioche bun. Guys, this is crazy good. Trust me. You'll love it. So maybe we can't solve all the world's problems with a backyard barbecue, but it's not the worst place to start. At the very least, take a little break and treat yourself to a Peanut Butter & Jelly Burger. You deserve it.",
  },
  {
    id: 9,
    firstName: ' nutella ',
    price: 19,
    type: 'burger',
    text: "To make Action Burger's delicious Nutella burger,our cook starts with a fresh beef patty and throws it on the grill. He then takes two freshly made buns and deep-fries them to golden perfection. After that, he cooks two pieces of bacon until they're perfectly crispy. Add some American cheese with the nutella creme on the burger, let it melt, and voilà!",
  },
  {
    id: 10,
    firstName: 'mermaid-cauliflower-rice',
    price: 19,
    type: 'burger',
    text: 'Tender sweet potatoes stuffed with a delicious blend of stir-fried veggies and chicken, topped with a spicy peanut sauce. Served with caramelized onions, red onions, lettuce, tomato, and pickles.',
  },
  {
    id: 11,
    firstName: 'ghost',
    price: 19,
    type: 'burger',
    text: "Zagat describes this burger as a'10-oz. patty stacked with ghost chile aïoli, slow-braised goat shoulder, aged white cheddar cheese, red wine reduction and a communion wafer garnish.' It's no surprise that this burger ended up causing some controversy when it came out due to its religious connections, but we don't think religion should have to be kept out of food if we're honest! We say throw it all together.",
  },
  {
    id: 12,
    firstName: 'yin-yang',
    price: 19,
    type: 'burger',
    text: 'We use flavors that harmonize together to create an ideally balanced burger by utilizing 5 colors (white, green, yellow, red, and black), 5 tastes (spicy, sour, bitter, salty and sweet) and 5 senses(food arrangement that attracts the eyes, aromatics that attract the nose, crisp ingredients that make sound, spices that stimulate taste and touch with holding the burger itself) that make this burger a complete experience!',
  },
  {
    id: 13,
    firstName: 'haiwaiian',
    price: 19,
    type: 'burger',
    text: "If you still haven't been to Hawaii yet, this savory sweet taste of Soldout's Hawaiian Burger will transport you to the islands. Their burger features a juicy beef patty topped with caramelized onions, Swiss cheese, teriyaki sauce, and a slice of grilled pineapple. The beef patty is seasoned just right without overpowering your palette. After just one bite of this Hawaiian burger, the flavors of charred beef and the teriyaki sauce atop a grilled pineapple and the onions and pickles will make you dream of Hawaii. The burger comes with tomatoes, lettuce, beef patty and homemade sauce that tastes a little bit sweet and savory that will keep you munching.",
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
  INSERT INTO products
   (first_name,price,type,text)
   VALUES
   (${product.firstName},${product.price}, ${product.type}, ${product.text})

`;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
DELETE FROM products WHERE id = ${product.id}

`;
  }
}
