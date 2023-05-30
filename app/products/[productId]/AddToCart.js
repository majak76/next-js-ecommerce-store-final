'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createOrUpdateComment } from './actions';
import styles from './AddToCart.module.scss';

export default function AddToCart(props) {
  const [quantity, setQuantity] = useState('1');
  const router = useRouter();
  return (
    <form className={styles.quantityForm}>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />
      <button
        data-test-id="product-add-to-cart"
        formAction={async () => {
          router.refresh();
          await createOrUpdateComment(props.productId, quantity);
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
