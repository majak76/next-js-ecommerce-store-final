'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateComment(productId, comment) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const productCommentsCookie = getCookie('cart');
  // 2. we parse the cookie
  const productComments = !productCommentsCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the fruitCommnet inside
      []
    : parseJson(productCommentsCookie);

  // 3. we edit the object

  // We get the object for the fruit in cookies or undefined
  const productToUpdate = productComments.find((productComment) => {
    return productComment.id === productId;
  });

  // case B: the cookie is defined but have the fruit in the action
  // if we are in fruit 1
  // [{id:1, comment:"abc"}]
  if (productToUpdate) {
    // we need to update the fruitComment
    productToUpdate.comment = Number(productToUpdate.comment) + Number(comment);
  } else {
    // case C: the cookie is defined but doesn't have the fruit in the action
    // if we are in fruit 1
    // [{id:2, comment:"abc"}]
    productComments.push({
      // we need insert the fruitCommnet
      id: productId,
      comment: Number(comment),
    });
  }

  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set('productComments', JSON.stringify(productComments));
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
