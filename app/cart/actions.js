'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function deleteItem(products) {
  const productQuantityCookie = getCookie('cart'); // get the current cookie from  the request headers
  // 2. Parse the cookie
  const productQuantities = !productQuantityCookie
    ? [] // 3. Create a new array with the productQuantity
    : parseJson(productQuantityCookie);

  const removeFromCart = productQuantities.filter(
    (product) => product.id !== product.id, //return a new array without the item that has been deleted
  );
  await cookies().set('cart', JSON.stringify(removeFromCart));
}
