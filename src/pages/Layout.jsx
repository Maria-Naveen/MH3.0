import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <>
      <SideBar></SideBar>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
