import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import styles from './products.module.scss';

export default function ProductsPage() {
  return (
    <main>
      <div className={styles.container}>
        <h1>Homepage</h1>
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              <Link href={`/products/${product.id}`}>{product.firstName}</Link>
              <br />
              <Image
                src={`/img/${product.firstName}.jpg`}
                width={100}
                height={100}
              />
              <p> {product.text}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
