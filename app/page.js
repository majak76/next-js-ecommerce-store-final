import Image from 'next/image';
import Link from 'next/link';
import { products } from '../database/products';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'left',
        }}
      >
        <Image src="/img/homepage.jpg" width="500" height="300" />
      </div>
      <p>Life is too short for self-hatred and celery sticks.</p>

      <input type="button" value="Menu" class="center"></input>
    </>
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
