import Image from 'next/image';
import Link from 'next/link';
import { products } from '../database/products';
import styles from './page.module.scss';

function HomePage() {
  return (
    <div style={{ backgroundColor: 'green' }}>
      <h1>Best burgers in town</h1>
      <Image src="/img/homepage.jpg" alt="Homepage" width={500} height={300} />
    </div>
  );
}

export default HomePage;
