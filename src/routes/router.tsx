import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from 'react';
import { ProtectedRoute } from "./ProtectedRoute";
// import { useAuth } from "../context/AuthContext";

const Home = lazy(() => import('../pages/Home'));
const Products = lazy(() => import('../pages/Products'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const Users = lazy(() => import('../pages/Users'));
const LandingLayout = lazy(() => import('../layout/LandingPageLayout'));
const PreLoginLayout = lazy(() => import('../layout/PreLoginPageLayout'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));

const Routes = () => {
    // const { accessToken } = useAuth();
    const router = createBrowserRouter([
        {
            path: '/',
            element: <LandingLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/products',
                    element: <ProtectedRoute><Products /></ProtectedRoute>,
                },
                {
                    path: '/users',
                    element: <ProtectedRoute><Users /></ProtectedRoute>,
                }
            ]
        },
        {
            path: '/sign-in',
            element: <PreLoginLayout />,
            children: [
                {
                    path: '/sign-in/',
                    element: <SignIn />
                }
            ]
        }
    ]);
    // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};



export default Routes;