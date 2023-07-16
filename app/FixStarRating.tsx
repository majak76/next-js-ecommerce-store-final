import styles from './RatingStars.module.scss';

type Props = {
  rating: number;
};

export default function FixStarRating({ rating }: Props) {
  const filledStars = Math.floor(rating);
  // const hasHalfStar = rating - filledStars >= 0.5;

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <span className={styles.star} key={`star-${i}`}>
        ★
      </span>,
    );
  }

  // if (hasHalfStar) {
  //   stars.push(
  //     <span className={styles.star} key="star-half">
  //       ½
  //     </span>,
  //   );
  // }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span className={styles.star} key={`star-empty-${i}`}>
        ☆
      </span>,
    );
  }

  return <div>{stars}</div>;
}
