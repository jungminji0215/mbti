import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/public/Home.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import Profile from "../pages/Profile.jsx";
import TestPage from "../pages/TestPage.jsx";
import TestResultPage from "../pages/TestResultPage.jsx";
import ProtectedRouts from "../components/router/ProtectedRouts.jsx";
import {
  HOME,
  PROFILE,
  SING_IN,
  SING_UP,
  TEST,
  TEST_RESULT,
} from "../utils/routes.js";

const Router = () => {
  // 로그인 비로그인 모두 접근 가능
  const publicRoutes = [
    {
      path: HOME,
      element: <Home />,
    },
  ];

  // 비로그인시에만 노출
  const routesForNotAuthenticatedOnly = [
    {
      path: SING_IN,
      element: <SignIn />,
    },
    {
      path: SING_UP,
      element: <SignUp />,
    },
  ];

  // protected route -> 로그인 페이지로 이동
  // 로그인시에만 노출
  // 페이지 접근 막아야함
  const routesForAuthenticatedOnly = [
    {
      path: PROFILE,
      element: <ProtectedRouts />,
      children: [<Profile />],
    },
    {
      path: TEST,
      element: <ProtectedRouts />,
      children: [<TestPage />],
    },
    {
      path: TEST_RESULT,
      element: <ProtectedRouts />,
      children: [<TestResultPage />],
    },
  ];

  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        ...publicRoutes,
        ...routesForNotAuthenticatedOnly,
        ...routesForAuthenticatedOnly,
      ],
    },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Router;
