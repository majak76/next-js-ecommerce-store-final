import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import {
  getProducts,
  getProductsWithLimitAndOffsetBySessionToken,
} from '../../database/products';
import { getReviews } from '../../database/reviews';
import { getUserBySessionToken } from '../../database/users';
import { poppins, quicksand } from '../../util/fonts';
import StarRating from '../RatingStars';
import styles from './products.module.scss';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  // 1. get the session token from the cookie
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);
  const products = await getProducts();
  const reviews = await getReviews();
  console.log('reviews', reviews);
  console.log(user);
  return (
    <main>
      <div className={styles.container}>
        {products.map((product) => {
          const productReview = reviews.filter(
            (review) => review.productId === product.id,
          );
          const ratings = productReview.map((review) => review.rating);
          console.log('ratings', ratings);
          const sum = ratings.reduce((total, rating) => total + rating, 0);
          const averageRating = sum / ratings.length;
          console.log('average rating', averageRating);

          return (
            <div key={`product-div-${product.id}`}>
              {/* <StarRating /> */}
              <div className={styles.ratingAndPrice} />
              <StarRating productId={product.id} userId={user?.id} />
              <span className={`${quicksand.className} ${styles.price}`}>
                {product.price}€
              </span>

              <Link
                className={styles.productLink}
                href={`/products/${product.id}`}
              >
                {product.firstName}
              </Link>
              <br />
              <Image
                className={styles.productImage}
                src={`/img/${product.firstName}.jpg`}
                width={150}
                height={150}
                priority
              />
              <p>{product.text}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
