import { createBrowserRouter, RouterProvider  } from "react-router-dom"
import Home from "./ui/Home.jsx";
import Menu, { loader as menuLoader } from "./features/menu/Menu.jsx";
import Order, { loader as orderLoader } from "./features/order/Order.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder, { action as createOrderAction } from "./features/order/CreateOrder.jsx";
import { action as actionUpdatePriority } from "./features/order/UpdatePriority.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import NotFound from "./ui/NotFound.jsx";
import ProtectRoute from "./ui/ProtectRoute.jsx";

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
        element: (
          <ProtectRoute>
            <Menu/>
          </ProtectRoute>
        ),
        loader: menuLoader,
        errorElement: <NotFound/>
      },
      {
        path: "/cart",
        element: (
          <ProtectRoute>
            <Cart/>
          </ProtectRoute>
        )
      },
      {
        path: "/order/new",
        element: (
          <ProtectRoute>
            <CreateOrder/>
          </ProtectRoute>
        ),
        action: createOrderAction 
      },
      {
        path: "/order/:orderId",
        element: (
          <ProtectRoute>
            <Order/>
          </ProtectRoute>
        ),
        loader: orderLoader,
        errorElement: <NotFound/>,
        action: actionUpdatePriority
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