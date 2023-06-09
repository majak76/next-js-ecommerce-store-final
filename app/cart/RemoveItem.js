"use client"

import {deleteItem} from "./actions";
import { useRouter } from 'next/navigation';
export default function RemoveItem({product})

{
  const router = useRouter();

  return (
    <button
    formAction={async () => {
      router.refresh();
      await deleteItem(product);
    }}
    >
      Remove
      </button>
  );
}
