import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RegisterPage from './Pages/register.jsx';
import LoginPage from './Pages/login.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductsPage from './Pages/products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
