import { cookies } from 'next/headers';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { getUserBySessionToken } from '../../database/users';
import { User } from '../../migrations/1687177508-createUsers';
import { LogoutButton } from '../LogoutButton';
import TotalNumber from '../totalnumber';
// import { CookieBanner } from './CookieBanner';
import style from './Navbar.module.css';

const Navbar = async () => {
  const sessionToken = cookies().get('sessionToken');
  const user = await getUserBySessionToken(sessionToken?.value);
  console.log(user);
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
      {/* <Link className={style.linkLogIn} href="/login">
        login
      </Link>{' '}
      <Link className={style.linkRegister} href="/register">
        register
      </Link> */}
      <div className={style.loginCart}>
        <div className={style.button}>
          {user ? (
            <>
              <div>{user.username}</div>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/register">register</Link>
              <Link href="/login">login</Link>
            </>
          )}
        </div>

        <div className={style.cart}>
          <Link className={style.link} href="/cart">
            <AiOutlineShoppingCart className={style.linkCart} />
          </Link>
          <div className={style.number}>
            <Link className={style.linkNumber} href="/">
              {' '}
            </Link>
            <TotalNumber />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
