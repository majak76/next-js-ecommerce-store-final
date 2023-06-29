import { cookies } from 'next/headers';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { getProductById } from '../../../database/products';
import {
  getReviewsByProductId,
  getReviewsWithUsername,
} from '../../../database/reviews';
import { getValidSessionByToken } from '../../../database/sessions';
import { getUserBySessionToken } from '../../../database/users';
import StarRating from '../../RatingStars';
import AddToCart from './AddToCart';
import styles from './product.module.scss';

export const dynamic = 'force-dynamic';

export default async function SingleProductPage({ params }) {
  const sessionTokenCookie = cookies().get('sessionToken');

  // export default async function ProductPage(props: Props) {
  //   const product = await getProductById(Number(props.params.productId));

  //   if (!product) {
  //     notFound();
  //   }

  // const reviews = await getReviewsWithUsername(Number(props.params.productId));
  // // console.log('reviews', reviews);
  // const allreviews = await getReviewsByProductId(
  //   Number(props.params.productId),
  // );

  // const ratings = allreviews.map((review) => review.rating);

  // const sum = ratings.reduce((total, rating) => total + rating, 0);
  // const averageRating = sum / ratings.length;

  // const sessionTokenCookie = cookies().get('sessionToken');

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
      <StarRating />
      <div>
        <Image
          data-test-id="product-image"
          src={`/img/${singleProduct.firstName}.jpg`}
          width={500}
          height={400}
          className={styles.productImage}
          alt="burger"
        />
      </div>
      <div className={styles.productInfoContainer}>
        <h1>{singleProduct.firstName}</h1>
        <h5>{singleProduct.description}</h5>
        <div className={styles.productPrice} data-test-id="product-price">
          {' '}
          € {singleProduct.price}
        </div>
        <p>{singleProduct.text}</p>

        <AddToCart productId={singleProduct.id} />
      </div>
    </section>
  );
}
