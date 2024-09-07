import { createBrowserRouter, RouterProvider  } from "react-router-dom"

import Home from "./ui/Home.jsx";
import Menu from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder from "./features/order/CreateOrder.jsx";
import Order from "./features/order/Order.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/menu",
    element: <Menu/>
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
    element: <Order/>
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}