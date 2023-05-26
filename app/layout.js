import Navbar from './components/Navbar';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
};
export default Layout;
