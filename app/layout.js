import './globals.scss';
import { Inter, Playfair_Display, Poppins } from 'next/font/google';
import Link from 'next/link';
import Navbar from './components/Navbar';
import TotalNumber from './totalnumber';

export const poppins = Poppins({ subsets: ['latin'], weight: '500' });

export const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
};
export default Layout;
