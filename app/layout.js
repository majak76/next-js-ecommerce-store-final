import Footer from './components/Footer';
import Navbar from './components/Navbar';

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
