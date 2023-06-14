'use client';

import { useRouter } from 'next/navigation';
import { deleteItem } from './actions';

export default function RemoveItem(props) {
  const router = useRouter();

  return (
    <button
      formAction={async () => {
        router.refresh();
        await deleteItem(props.product);
      }}
    >
      Remove
    </button>
  );
}
