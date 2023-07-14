'use client';

import { useRouter } from 'next/navigation';
import { TfiTrash } from 'react-icons/tfi';
import { deleteItem } from './actions';
import styles from './cart.module.scss';

export default function RemoveItem(props) {
  const router = useRouter();

  return (
    <div className={styles.removeButton}>
      <button
        formAction={async () => {
          router.refresh();
          await deleteItem(props.product);
        }}
      >
        <TfiTrash className={styles.removeIcon} name="remove-button" />
      </button>
    </div>
  );
}
