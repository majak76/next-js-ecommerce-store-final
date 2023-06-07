import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import TotalNumber from '../totalnumber';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.navigator}>
      <div className={style.navigation}>
        <Link className={style.linkHome} href="/">
          Home
        </Link>{' '}
        <Link className={style.linkProducts} href="/products">
          Products
        </Link>{' '}
      </div>
      <div className={style.cart}>
        <Link className={style.link} href="/cart">
          <AiOutlineShoppingCart className={style.linkCart} />
        </Link>
        <div className={style.number}>
          <TotalNumber />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
