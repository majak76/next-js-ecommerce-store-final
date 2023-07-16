import Image from 'next/image';
import Link from 'next/link';
import { getProducts, getProductsById } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { getQuantity } from '../products/[productId]/actions';
import styles from './cart.module.scss';
import ChangeQuantity from './ChangeQuantity';
import getCartTotal from './getCartTotal';
import { productData } from './productData';
import QuantityInputField from './QuantityInputField';
import RemoveItem from './RemoveItem';

export const dynamic = 'force-dynamic';

export default async function CartPage() {
  const products = await getProducts();
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const productsInCart = productData(products, productQuantities);
  // const products = await getProductsById();
  console.log(products);
  return (
    <main>
      {productsInCart.length === 0 ? (
        <h1 className={styles.emptyCart}> 🛒 Your cart is empty 🛒 </h1>
      ) : (
        <div className={styles.cartContainer}>
          <div className={styles.cartOverviewContainer}>
            <div className={styles.cartTableHead}>
              <div>Image</div>
              <div>Name</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
              <div>Action</div>
            </div>

            <div className={styles.itemsInCart}>
              {productsInCart.map((product) => {
                let subTotal = 0;
                subTotal = product.quantity * product.price;
                return (
                  <div
                    key={`product-div-${product.id}`}
                    className={styles.productCard}
                  >
                    {' '}
                    <div>
                      <Image
                        src={`/img/${product.firstName}.jpg`}
                        width={130}
                        height={130}
                        className={styles.productImage}
                        alt={product.firstName}
                      />
                    </div>
                    <Link
                      className={styles.productFirstName}
                      href={`/products/${product.id}`}
                    >
                      {product.firstName}
                    </Link>
                    <p>€ {product.price}</p>
                    {/* <form> */}
                    <div>
                      <div className={styles.changeCounter}>
                        <div className={styles.button}>
                          <div className={styles.number}>
                            <ChangeQuantity product={product} />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </form> */}
                    <div> Subtotal: €{subTotal}</div>
                    <form
                      data-test-id={`cart-product-remove-${product.id}`}
                      name="remove-button"
                    >
                      <RemoveItem product={product} />
                    </form>
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.cartTotalContainer}>
            <div className={styles.cartTotalCard}>
              <h3>Cart Total</h3>
              <div
                data-test-id="cart-total"
                className={styles.grandTotalAmount}
              >
                €{getCartTotal(productsInCart)}
              </div>
              <div className={styles.buttons}>
                <br />
                <Link
                  className={`${styles.continueShoppingButton} ${styles.cartButton}`}
                  href="/products"
                >
                  Continue Shopping
                </Link>
                <br />
                <br />
                <Link
                  className={`${styles.checkoutButton} ${styles.cartButton}`}
                  href="/checkout/"
                  data-test-id="cart-checkout"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

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
// export const dynamic = 'force-dynamic';

// export const metadata = {
//   description: 'Life is too short for self-hatred and celery sticks.',
// };

// export default function CartPage() {
//   // This is what we want when using cookies
//   const productCookie = getCookie('cart');

//   const productCookieQuantity = !productCookie ? [] : parseJson(productCookie);

//   const productQuantity = products.map((product) => {
//     const matchingProductFromCookie = productCookieQuantity.find(
//       (productObject) => product.id === productObject.id,
//     );

//     return { ...product, quantity: matchingProductFromCookie?.quantity };
//   });

//   const filterforprice = productQuantity.filter(
//     (product) => product.quantity > 0,
//   );

//   const onlyPrices = filterforprice.map(
//     (product) => product.quantity * product.price,
//   );

//   console.log(onlyPrices);
//   console.log('WHAT IS PRODUCT: ', productQuantity);

//   const productsInCart = productData(products, productQuantity);
//   return (
//     <main>
//       {productsInCart.length === 0 ? (
//         <h1 className={styles.emptyCart}>🛒 Your cart is empty 🛒</h1>
//       ) : (
//     <div>
//       {productQuantity
//         .filter((productsInCart) => product.quantity > 0)
//         .map((productsInCart) => {
//           console.log(product);
//           return (

//           <div key={`products-${product.id}`}>
//               <div>Price: {product.price}</div>

//               <Link
//                 className={styles.productName}
//                 href={`/products/${product.id}`}
//               >
//                 {' '}
//                 Product name: {product.firstName}{' '}
//               </Link>
//               <br />

//               <Image
//                 alt={product.firstName}
//                 src={`/img/${product.firstName}.jpg`}
//                 width={150}
//                 height={150}
//               />
//               <div>Product quantity: {product.quantity}</div>

//               <div>Total price: {product.quantity * product.price}</div>

//               <div>
//                 {' '}
//                 Product quantity: <QuantityInputField />{' '}
//               </div>
//               <form>
//                 <RemoveItem product={product} />
//               </form>
//             </div>
//           );
//         })}
//       {/* {onlyPrices.reduce(
//         (accumulator, currentValue) => accumulator + currentValue,
//         0,
//       )} */}
//       <Link href="/checkout"> Checkout</Link>
//     </div>
//       );
// }
// </main>
// );
// }
