import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
//import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetail from "./components/RestaurantDetail";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AboutUs = lazy(() => import("./components/AboutUs"));
const Footer = () => {
  return <div className="footer">Footer here</div>;
};
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ username: "Elon" }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
