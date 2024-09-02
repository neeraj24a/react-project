import { createBrowserRouter } from "react-router-dom";

import { lazy } from 'react';
import RequireAuth from "../components/RequireAuth";

const Home = lazy(() => import('./Home'));
const Products = lazy(() => import('./Products'));
const SignIn = lazy(() => import('./SignIn'));
const SignUp = lazy(() => import('./SignUp'));
const Users = lazy(() => import('./Users'));
const LandingLayout = lazy(() => import('../layout/LandingPageLayout'));
const PreLoginLayout = lazy(() => import('../layout/PreLoginPageLayout'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));

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
                element: <RequireAuth><Products /></RequireAuth>,
            },
            {
                path: '/users',
                element: <RequireAuth><Users /></RequireAuth>,
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

export default router;