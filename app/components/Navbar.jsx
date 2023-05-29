import Link from 'next/link';
import style from './Navbar';

const Navbar = () => {
  return (
    <nav className={style.navigator}>
      <Link href="/">home</Link> <Link href="/products">products</Link>{' '}
      <Link href="/cart">cart</Link>
    </nav>
  );
};
export default Navbar;
