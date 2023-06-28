import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './products.module.scss';

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main>
      <div className={styles.container}>
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
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
