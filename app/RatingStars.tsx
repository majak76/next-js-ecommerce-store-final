'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { submitReview } from '../database/reviews';
// import styles from './globalMediaQueries.scss';
import Star from './Star';

type Props = {
  productId: number;
  userId: number;
};

// The complete StarRating component

export default function StarRating({ productId, userId }: Props) {
  const [starValue, setStarValue] = useState<number>();
  const [productIdValue, setProductIdValue] = useState<number>();
  const router = useRouter();
  // Sending the Star Rating information to the API
  async function sendRatingToBackEnd() {
    await fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify({
        productIdValue,
        starValue,
        userId,
      }),
    });
  }
  function checkUserLogIn() {
    if (!userId) {
      router.push('/login');
    }
  }

  useEffect(() => {
    if (starValue && productIdValue) {
      sendRatingToBackEnd().catch((error) => console.log(error));

      // This is the start of a code that should not be your concern

      // This is the end of code that should not be your concern
    }
  }, [starValue, productIdValue]);

  return (
    <>
      {/* This is how the five stars that shows are being created */}
      {Array.from(Array(5)).map((key, i) => {
        const starValueIndex = i + 1;
        return (
          <button
            key={key}
            onClick={async (event) => {
              event.preventDefault();
              checkUserLogIn();
              setStarValue(starValueIndex);
              setProductIdValue(productId);
              // await submitReview(userId, String(productId), starValueIndex);
            }}
          >
            {/* You can change these colors to what you want */}
            <Star
              fillColor={starValue! >= starValueIndex ? 'orange' : '#d5ab55'}
            />
          </button>
        );
      })}
      {/* Start of the code that should not be your concern */}
      {/* <br />
      <h4>Three values to send to database</h4>
      <p>Star Value: {starValue}</p>
      <p>Product Id: {productIdValue}</p>
      <p>User Id: {userId}</p>
      <br /> */}

      {/* End of the code that should not be your concern */}
    </>
  );
}

// type Props = {
//   rating: number;
// };

// export default function StarRating({ rating }: Props) {
//   const filledStars = Math.floor(rating);
//   const hasHalfStar = rating - filledStars >= 0.5;

//   const stars = [];
//   for (let i = 0; i < filledStars; i++) {
//     stars.push(<span key={`star-${i}`}>★</span>);
//   }

//   if (hasHalfStar) {
//     stars.push(<span key="star-half">½</span>);
//   }

//   const emptyStars = 5 - stars.length;
//   for (let i = 0; i < emptyStars; i++) {
//     stars.push(<span key={`star-empty-${i}`}>☆</span>);
//   }

//   return <div>{stars}</div>;
// }
