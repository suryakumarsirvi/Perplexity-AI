import {createBrowserRouter, Navigate} from 'react-router'
import PublicRoutes from '../guards/PublicRoutes'
import PrivateRoutes from '../guards/PrivateRoutes'
import AuthLayout from '../features/auth/pages/AuthLayout'
import Home from '../features/main/pages/Home'
import NotFound from '../features/main/pages/NotFound'
import ForgotPassword from '../features/auth/pages/ForgotPassword'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/login'/>
    },
    {
        path:'/login',
        element: 
        <PublicRoutes>
            <AuthLayout mode='login'/>
        </PublicRoutes>
    },
    {
        path: '/register',
        element: 
        <PublicRoutes>
            <AuthLayout mode='register'/>
        </PublicRoutes>
    },
    {
        path: '/forgot-password',
        element: 
        <PublicRoutes>
            <ForgotPassword />
        </PublicRoutes>
    },
    {
        path: '/home',
        element: 
        <PrivateRoutes>
            <Home/>
        </PrivateRoutes>
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default Router;