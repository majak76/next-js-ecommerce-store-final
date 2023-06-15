import Image from 'next/image';
import styles from './thankyou.module.scss';

export default function ThankYouPage() {
  return (
    <main className={styles.thankyouContainer}>
      <h1>Thank you for your order</h1>
      <div>
        <p>
          {' '}
          Your oder has been received and an email receipt has been sent to the
          email address provided.
        </p>
      </div>
    </main>
  );
}
