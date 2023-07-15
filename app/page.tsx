import Image from 'next/image';
import Link from 'next/link';
// import { products } from '../database/products';
import styles from './page.module.scss';

export default function Home() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.header}>
        <div className={styles.heroImage}>
          <Image
            src="/img/homepage.jpg"
            width="500"
            height="300"
            alt=""
            className={styles.image}
          />
        </div>

        <div className={styles.descriptionBox}>
          <div className={styles.description1}>
            <h1>Life is too short for self-hatred and celery sticks.</h1>
          </div>
          <div className={styles.description2}>
            <p>
              Try some of the craziest burger combos on earth. The richness of
              the ingredients and the explosion of flavour in just one bite will
              make you question everything you've eaten so far.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.idMenuButton}>
        <Link href="/products" className={styles.menuLink}>
          {' '}
          Menu
        </Link>
      </div>
    </section>
  );
}

// import { products } from '../data'; // this is my fake product, your product is coming from database
// import styles from './page.module.scss';
// import StarRating from './RatingStars';

// export default function Home() {
//   // This is my fake logged in user, in your case you need to Generated
//   // the user that is currently logged in
//   const user = {
//     id: 1,
//     username: 'Ana',
//   };

//   return (
//     <div className={styles.main}>
//       <h2>We can rate these products from here</h2>

//       {products.map((product) => {
//         return (
//           <div
//             key={product.id}
//             style={{
//               border: '1px green solid',
//               margin: '4px',
//               width: '300px',
//               height: '260px',
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '12px',
//               alignItems: 'center',
//             }}
//           >
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>{product.price}</p>
//             <strong>
//               <a href={`/${product.id}`}>View Product</a>
//             </strong>

//             {/* How the StarRating component is being used */}
//             <StarRating productId={product.id} userId={user.id} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }
