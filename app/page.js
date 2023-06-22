import Image from 'next/image';
import Link from 'next/link';
import { products } from '../database/products';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.header}>
        <div className={styles.heroimage}>
          <Image
            src="/img/homepage.jpg"
            width="500"
            height="300"
            className={styles.image}
          />
        </div>
        <h1>Life is too short for self-hatred and celery sticks.</h1>
      </div>

      <Link href="/products" className={styles.menuLink}>
        {' '}
        Menu
      </Link>
    </section>
  );
}

{
  /* // function HomePage() {
  return (
    <div>
      <h1>Best burgers in town</h1>
      <style>.imgMain margin-left:auto; margin-right:auto;</style>
      <Image src="/img/homepage.jpg" class="imgMain"></Image> width={500}{' '}
      height={300}
    </div>
  );
} */
}
