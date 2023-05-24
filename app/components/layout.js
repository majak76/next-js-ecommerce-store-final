import { Children } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ Children }) => {
  return (
    <div>
      <Navbar />
      {Children}
      <Footer />
    </div>
  );
};
export default Layout;
