import Image from 'next/image';
import Link from 'next/link';
import { products } from '../database/products';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <h1>Homepage</h1>
      </div>
    </main>
  );
}
