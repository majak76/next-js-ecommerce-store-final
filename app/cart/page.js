import { getProductsById } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { getQuantity } from '../products/[productId]/actions';

export default async function CartPage() {
  const productQuantity = await getQuantity();
  const productInCart = await Promise.all(
    productQuantity.map(async (item) => {
      const matchingProduct = await getProductsById(Number(item.id));

      return {
        ...matchingProduct,
        quantity: item.quantity,
      };
    }),
  );

  return (
    <>
      {productInCart.map((products) => {
        return (
          <div key={`product-${products.id}`}>
            {products.name}
            {products.price}
            {products.quality}
          </div>
        );
      })}
    </>
  );
}
