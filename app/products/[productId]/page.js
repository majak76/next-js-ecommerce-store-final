import Image from 'next/image';
import { getProductsById } from '../../../database/products';
import AddToCart from './AddToCart';
import styles from './product.module.scss';

export const dynamic = 'force-dynamic';
export default async function SingleProductPage({ params }) {
  const singleProduct = await getProductsById(Number(params.productId));

  return (
    <section className={styles.productContainer}>
      <div>
        <Image
          data-test-id="product-image"
          src={`/img/${singleProduct.firstName}.jpg`}
          width={500}
          height={500}
          className={styles.productImage}
          alt=""
        />
      </div>
      <div className={styles.productInfoContainer}>
        <h1>{singleProduct.firstName}</h1>
        <h5>{singleProduct.description}</h5>
        <h6 data-test-id="product-price"> € {singleProduct.price}</h6>
        <p>{singleProduct.text}</p>
        <AddToCart productId={singleProduct.id} />
      </div>
    </section>
  );
}
