import React from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "../../components/Main";
import CarLayout from "../../components/Cars";

import Home from "../Home";
import About from "../About";
import NotFound from "../404";
import Profile from "../Profile";
import Cars from "../CarsView/Cars";
import Reviews from "../CarsView/Reviews";
import Incomes from "../CarsView/Incomes";
import Dashboard from "../CarsView/Dashboard";
import Login from "../Auth/Login";
import SignUp from "../Auth/Signup";
import Logout from "../Auth/Logout";

// import ProtectedRoute from "./components/ProtectedRoute";

import GlobalStyle from "../../styles";
import { PrivateRoute, PublicRoute } from "../../config/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PrivateRoute.HomePage.url} element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path={PrivateRoute.ProfilePage.url} element={<Profile />} />
      <Route path={PrivateRoute.LogoutPage.url} element={<Logout />} />
      <Route path={PrivateRoute.CarPage.url} element={<CarLayout />}>
        <Route index element={<Dashboard />} />
        <Route path={PrivateRoute.CarPage.CarsPage.url} element={<Cars />} />
        <Route
          path={PrivateRoute.CarPage.ReviewsPage.url}
          element={<Reviews />}
        />
        <Route
          path={PrivateRoute.CarPage.IncomesPage.url}
          element={<Incomes />}
        />
      </Route>
      <Route path={PublicRoute.AboutPage.url} element={<About />} />
      <Route path={PublicRoute.LoginPage.url} element={<Login />} />
      <Route path={PublicRoute.SignupPage.url} element={<SignUp />} />
      <Route path={PublicRoute.NotFoundPage.url} element={<NotFound />} />
    </Route>
  )
);

function Main() {
  return (
    <div className="bg-slate-800">
      <RouterProvider router={router} />
      <GlobalStyle />
    </div>
  );
}

export default Main;
