import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { LogoutButton } from '../LogoutButton';
import TotalNumber from '../totalnumber';
// import { CookieBanner } from './CookieBanner';
// import { LogoutButton } from './LogoutButton';
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
      <Link className={style.linkLogIn} href="/login">
        login
      </Link>{' '}
      <Link className={style.linkRegister} href="/register">
        register
      </Link>
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
