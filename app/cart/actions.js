'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function deleteItem(item) {
  const productQuantityCookie = getCookie('cart'); // get the current cookie from  the request headers
  // 2. Parse the cookie
  const productQuantities = !productQuantityCookie
    ? [] // 3. Create a new array with the productQuantity
    : parseJson(productQuantityCookie);

  const removeFromCart = productQuantities.filter(
    (product) => product.id !== item.id, //return a new array without the item that has been deleted
  );

  await cookies().set('cart', JSON.stringify(removeFromCart));
}
// increase quantity
export async function addQuantity(item) {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);
  const increase = productQuantities.find((product) => {
    return product.id === item.id;
  });
  increase.quantity += 1;
  await cookies().set('cart', JSON.stringify(productQuantities));
}

// decrease quantity
export async function subtractQuantity(item) {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);
  const decrease = productQuantities.find((product) => {
    return product.id === item.id;
  });
  // decrease.quantity -= 1;
  decrease.quantity > 1 ? (decrease.quantity -= 1) : (decrease.quantity = 1);
  await cookies().set('cart', JSON.stringify(productQuantities));
}

// clear the cookie after submitting the form
// export async function removeCookie() {
//   await cookies().set('cart', JSON.stringify([]));
// }
