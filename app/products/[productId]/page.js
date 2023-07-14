import { cookies } from 'next/headers';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { products } from '../../../data';
import { getProductById } from '../../../database/products';
import {
  getReviewById,
  getReviews,
  getReviewsByProductId,
  submitReview,
} from '../../../database/reviews';
import { getValidSessionByToken } from '../../../database/sessions';
import { getUserBySessionToken } from '../../../database/users';
import { poppins, quicksand, raleway } from '../../../util/fonts';
import StarRating from '../../RatingStars';
import AddToCart from './AddToCart';
import styles from './product.module.scss';

export const dynamic = 'force-dynamic';

export default async function SingleProductPage({ params }) {
  const sessionTokenCookie = cookies().get('sessionToken');
  const product = await getProductById(Number(params.productId));

  if (!product) {
    notFound();
  }
  const reviews = await Number(params.productId);
  // console.log('reviews', reviews);
  const allreviews = await getReviewsByProductId(Number(params.productId));
  const ratings = allreviews.map((review) => review.rating);

  const sum = ratings.reduce((total, rating) => total + rating, 0);
  const averageRating = sum / ratings.length;

  // 2. check if the sessionToken has a valid session const user = sessionTokenCookie &&

  const singleProduct = await getProductById(Number(params.productId));
  const user = await getUserBySessionToken(sessionTokenCookie?.value);
  console.log('user', user);
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form if (!session)

  if (!session) {
    redirect(`/login?returnTo=/products/${singleProduct.id}`);
  }

  // const singleProduct = await getProductById(Number(params.productId));

  // !user ? '' : <AddToCart />;
  return (
    <section className={styles.productContainer}>
      <div className={styles.starContainer}>
        <div>
          <Image
            data-test-id="product-image"
            src={`/img/${singleProduct.firstName}.jpg`}
            width={500}
            height={500}
            className={styles.productImage}
            alt="burger"
          />
        </div>
      </div>
      <div className={styles.productInfoContainer}>
        <div className={styles.titleRating}>
          <h1>{singleProduct.firstName}</h1>
          <div className={styles.starRating}>
            <StarRating productId={product.id} userId={user?.id} />{' '}
          </div>
        </div>
        <h5>{singleProduct.text}</h5>
        {/* <h5>{singleProduct.description}</h5> */}
        <h6>
          {' '}
          Price:{''}
          <span data-test-id="product-price">{singleProduct.price}</span> EUR
        </h6>
        {/* <h5>{singleProduct.text}</h5> */}
        <p className={styles.quantityTitle}>Quantity</p>
        <div>
          <AddToCart productId={singleProduct.id} />
        </div>
      </div>
    </section>
  );
}
