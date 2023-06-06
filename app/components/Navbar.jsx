import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import TotalNumber from '../totalnumber';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.navigator}>
      <Link className={style.linkHome} href="/">
        Home
      </Link>{' '}
      <Link className={style.linkProducts} href="/products">
        Products
      </Link>{' '}
      <Link className={style.link} href="/cart">
        <AiOutlineShoppingCart className={style.linkCart} />
      </Link>
      <TotalNumber />
    </nav>
  );
};
export default Navbar;
