import { getQuantity } from './products/[productId]/actions';

export default function TotalNumber() {
  async function showProductAmount() {
    const currentProducts = await getQuantity();

    return currentProducts.reduce((total, item) => total + item.quantity, 0);
  }

  return <p>{showProductAmount()}</p>;
}
