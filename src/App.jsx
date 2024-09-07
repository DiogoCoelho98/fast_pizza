import { createBrowserRouter, RouterProvider  } from "react-router-dom"

import Home from "./ui/Home.jsx";
import Menu, { loader as menuLoader } from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder from "./features/order/CreateOrder.jsx";
import Order, { loader as orderLoader } from "./features/order/Order.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import NotFound from "./ui/NotFound.jsx";

const router = createBrowserRouter([  
  {
    element: <AppLayout/>,
    errorElement: <NotFound />, 
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/menu",
        element: <Menu/>,
        loader: menuLoader,
        errorElement: <NotFound/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/order/new",
        element: <CreateOrder/>
      },
      {
        path: "/order/:orderId",
        element: <Order/>,
        loader: orderLoader,
        errorElement: <NotFound/>
      }
    ]
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}