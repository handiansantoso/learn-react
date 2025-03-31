import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetail from "./components/RestaurantDetail";

const Footer = () => {
  return (
    <div className="footer">
      Footer here
    </div>
  );
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const AppRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantDetail />
            },
        ]
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
