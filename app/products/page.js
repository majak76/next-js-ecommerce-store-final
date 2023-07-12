import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
// import { getProductById } from '../../database/products';
// import { products } from '../../data';
import {
  getProducts,
  getProductsWithLimitAndOffsetBySessionToken,
} from '../../database/products';
import { getReviews } from '../../database/reviews';
import { getValidSessionByToken } from '../../database/sessions';
import { getUserBySessionToken } from '../../database/users';
// import { getUserBySessionToken } from '../../database/users';
import { poppins, quicksand } from '../../util/fonts';
import FixStarRating from '../FixStarRating';
import StarRating from '../RatingStars';
import styles from './products.module.scss';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  // // 1. get the session token from the cookie
  const sessionTokenCookie = cookies().get('sessionToken');
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);
  const products = await getProducts();
  const reviews = await getReviews();
  console.log('hello', reviews);
  console.log(user);
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));
  // 3. Either redirect or render the login form if (!session)

  // if (!session) {
  //   redirect(`/login?returnTo=/products/${singleProduct.id}`);
  // }

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
          const averageRating = Math.round((sum / ratings.length) * 10) / 10;
          // const averageRating = sum / ratings.length;
          console.log(
            'average rating',
            averageRating,
            'for product',
            product.id,
          );

          //         const sum = ratings.reduce((total, rating) => total + rating, 0);
          // const averageRating = Math.round((sum / ratings.length) * 10) / 10;

          return (
            <div key={`product-div-${product.id}`}>
              {/* <StarRating /> */}
              <div className={styles.ratingAndPrice} />
              {/* <StarRating productId={product.id} userId={user?.id} /> */}
              <FixStarRating rating={averageRating} />
              {/* <StarRating rating={averageRating} /> */}
              {!isNaN(averageRating) && <span> {averageRating} </span>}
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
                width={200}
                height={200}
                priority
              />

              {/* <p>{product.text}</p> */}
            </div>
          );
        })}
      </div>
    </main>
  );
}
