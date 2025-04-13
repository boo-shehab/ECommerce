import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserLayout from "./components/Layout/UserLayout"
import Home from "./pages/Home"
import {Toaster} from 'sonner'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import CollectionPage from "./pages/CollectionPage"
import ProductDetails from "./components/Products/ProductDetails"
import Checkout from "./components/Cart/Checkout"
import OrderConfirmationPage from "./pages/OrderConfirmationPage"
import OrderDetailsPage from "./pages/orderDetailsPage"

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <UserLayout />,
    children: [{
      path: '/',
      element: <Home />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    },
    {
      path: 'profile',
      element: <Profile />
    },
    {
      path: 'collections/:collection',
      element: <CollectionPage />
    },
    {
      path: 'product/:id',
      element: <ProductDetails />
    },
    {
      path: 'checkout',
      element: <Checkout />
    },
    {
      path: 'order-confirmation',
      element: <OrderConfirmationPage />
    },
    {
      path: 'order/:id',
      element: <OrderDetailsPage />
    }]
  }])
  return (
    <>
      <Toaster position="top-right"/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
