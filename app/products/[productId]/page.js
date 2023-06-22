import Image from 'next/image';
import { getProductById } from '../../../database/products';
import AddToCart from './AddToCart';
import styles from './product.module.scss';

export const dynamic = 'force-dynamic';
export default async function SingleProductPage({ params }) {
  const singleProduct = await getProductById(Number(params.productId));

  console.log('singleProduct.firstName', singleProduct.firstName);
  console.log('singleProduct.firstName', singleProduct.firstName);
  return (
    <section className={styles.productContainer}>
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
