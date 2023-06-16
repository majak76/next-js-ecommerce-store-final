
export default function getCartTotal(product) {
  const productsInCart = product;
  return productsInCart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0,
  );
}
