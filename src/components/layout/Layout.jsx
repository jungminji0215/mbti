import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const [isLogin, setIsLogin] = useState(false); // 로그인 해서 들어올때만 true

  return (
    <>
      <Header />
      <main className=" h-screen " style={{ height: "calc(100vh - 56px)" }}>
        <Outlet context={{ isLogin, setIsLogin }} />
      </main>
    </>
  );
};

export default Layout;
