import Image from 'next/image';
import Link from 'next/link';
import { getProductsById, products } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { getQuantity } from '../products/[productId]/actions';

// const productQuantity = await getQuantity();
// const productInCart = await Promise.all(
//   productQuantity.map(async (item) => {
//     const matchingProduct = await getProductsById(Number(item.id));

//     return {
//       ...matchingProduct,
//       quantity: item.quantity,
//     };
//   }),
// );

export default function CartPage() {
  // This is what we want when using cookies
  const productCookie = getCookie('cart');

  const productCookieQuantity = !productCookie ? [] : parseJson(productCookie);

  const productQuantity = products.map((product) => {
    const matchingProductFromCookie = productCookieQuantity.find(
      (productObject) => product.id === productObject.id,
    );

    return { ...product, quantity: matchingProductFromCookie?.quantity };
  });

  const filterforprice = productQuantity.filter(
    (product) => product.quantity > 0,
  );

  const onlyPrices = filterforprice.map(
    (product) => product.quantity * product.price,
  );

  console.log(onlyPrices);

  return (
    <div>
      {productQuantity
        .filter((product) => product.quantity > 0)
        .map((product) => {
          return (
            <div key={`products-${product.id}`}>
              <h1></h1>
              <h3>{product.price}</h3>
              {product.quantity}
              <Link href={`/products/${product.id}`}>{product.firstName}</Link>
              <br />
              <Image
                alt={product.firstName}
                src={`/img/${product.firstName}.jpg`}
                width={150}
                height={150}
              />
              {product.quantity * product.price}
            </div>
          );
        })}
      {onlyPrices.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      )}
    </div>
  );
}