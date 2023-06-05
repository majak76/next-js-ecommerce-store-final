import Navbar from './components/Navbar';
import TotalNumber from './totalnumber';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar /> <TotalNumber />
          {children}
        </div>
      </body>
    </html>
  );
};
export default Layout;
