import { Outlet } from "react-router-dom";
import NavBarr from "./NavBarr";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <NavBarr />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
