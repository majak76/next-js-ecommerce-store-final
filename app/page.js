import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Burger Kitchen in Vienna</title>
        <meta name="desciption" content="Best burgers in town" />
      </Head>
      homepage
    </div>
  );
}
