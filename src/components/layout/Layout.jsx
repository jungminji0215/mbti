import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  // 로그인 해서 들어올때만 true
  // const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Header />
      <main className=" h-screen " style={{ height: "calc(100vh - 56px)" }}>
        <Outlet
        // context={{ isLogin, setIsLogin }}
        />
      </main>
    </>
  );
};

export default Layout;
