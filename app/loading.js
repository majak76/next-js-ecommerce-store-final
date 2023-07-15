// export default function RootLoading() {
//   return <div>Loading...</div>;
// }
import styles from './page.module.scss';

export default function RootLoading() {
  return <div className={styles.loadingContainer}>⏳ Loading... ⏳</div>;
}
