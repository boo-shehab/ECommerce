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
import MyOrderPage from "./pages/MyOrderPage"
import AdminLayout from "./components/Admin/AdminLayout"
import AdminHomePage from "./pages/AdminHomePage"
import UserManagement from "./components/Admin/UserManagement"
import ProductManagement from "./components/Admin/ProductManagement"
import EditProductPage from "./components/Admin/EditProductPage"
import OrderDetailsPage from "./pages/OrderDetailsPage"
import OrderManagement from "./components/Admin/OrderManagement"

function App() {
  const router = createBrowserRouter([
    {
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
      },
      {
        path: 'my-orders',
        element: <MyOrderPage />
      }]
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        {
          path: '/admin',
          element: <AdminHomePage />
        },
        {
          path: '/admin/users',
          element: <UserManagement />
        },
        {
          path: '/admin/products',
          element: <ProductManagement />
        },
        {
          path: '/admin/products/:id/edit',
          element: <EditProductPage />
        },
        {
          path: '/admin/orders',
          element: <OrderManagement />
        }
      ]
    }
  ])
  return (
    <>
      <Toaster position="top-right"/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
