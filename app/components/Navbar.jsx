import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import style from './Navbar';

const Navbar = () => {
  return (
    <nav className={style.navigator}>
      <Link href="/">home</Link> <Link href="/products">products</Link>{' '}
      <Link href="/cart">
        <AiOutlineShoppingCart />
      </Link>
    </nav>
  );
};
export default Navbar;
