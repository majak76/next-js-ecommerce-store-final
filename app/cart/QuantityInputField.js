"use client"
import { useState } from 'react';
import styles from "./QuantityInputField";

export default function QuantityInputField() {
  const [quantity, setQuantity] = useState('1');

  return (

    <form className={styles.QuantityInputField}>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />

    </form>

  )
      };
