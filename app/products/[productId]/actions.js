'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateComment(productId, quantity) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const stringCookie = getCookie('cart');
  // 2. we parse the cookie
  const parsedCookie = !stringCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the fruitCommnet inside
      []
    : parseJson(stringCookie);

  // 3. we edit the object

  // We get the object for the fruit in cookies or undefined
  const cookieItemtoUpdate = parsedCookie.find((item) => {
    return item.id === productId;
  });

  // case B: the cookie is defined but have the fruit in the action
  // if we are in fruit 1
  // [{id:1, comment:"abc"}]
  if (cookieItemtoUpdate) {
    // we need to update the fruitComment
    cookieItemtoUpdate.quantity =
      Number(cookieItemtoUpdate.quantity) + Number(quantity);
  } else {
    // case C: the cookie is defined but doesn't have the fruit in the action
    // if we are in fruit 1
    // [{id:2, comment:"abc"}]
    parsedCookie.push({
      // we need insert the fruitCommnet
      id: productId,
      quantity: Number(quantity),
    });
  }

  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set('cart', JSON.stringify(parsedCookie));
}

export async function getQuantity() {
  // 1. Get the current cookie from the Request Headers
  const productQuantityCookie = await getCookie('cart');
  // 2. Parse the cookie
  const productQuantities = !productQuantityCookie
    ? [] // 3. Create a new array with the productQuantity
    : parseJson(productQuantityCookie);
  return productQuantities;
}
