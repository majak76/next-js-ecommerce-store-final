import { products } from '../data'; // this is my fake product, your product is coming from database
import styles from './page.module.scss';
import StarRating from './RatingStars';

export default function Home() {
  // This is my fake logged in user, in your case you need to Generated
  // the user that is currently logged in
  const user = {
    id: 1,
    username: 'Ana',
  };

  return (
    <div className={styles.main}>
      <h2>We can rate these products from here</h2>

      {products.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              border: '1px green solid',
              margin: '4px',
              width: '300px',
              height: '260px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <strong>
              <a href={`/${product.id}`}>View Product</a>
            </strong>

            {/* How the StarRating component is being used */}
            <StarRating productId={product.id} userId={user.id} />
          </div>
        );
      })}
    </div>
  );
}
