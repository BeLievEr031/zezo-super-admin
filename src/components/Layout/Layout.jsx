import React from "react";
import SideBar from "../SideBar/SideBar";

function Layout({ children }) {
  return (
    <div className="w-screen flex ">
      <SideBar />
      {children}
    </div>
  );
}

export default Layout;
