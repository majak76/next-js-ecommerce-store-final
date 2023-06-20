import Link from 'next/link';
import Navbar from './components/Navbar';
import { LogoutButton } from './LogoutButton';
import TotalNumber from './totalnumber';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />

          <LogoutButton />

          {children}
        </div>
      </body>
    </html>
  );
};
export default Layout;
