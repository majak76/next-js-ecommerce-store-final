'use client';

import { useRouter } from 'next/navigation';
import { deleteItem } from './actions';

export default function RemoveItem({ id }) {
  const router = useRouter();

  return (
    <button
      formAction={async () => {
        router.refresh();
        await deleteItem(id);
      }}
    >
      Remove
    </button>
  );
}
