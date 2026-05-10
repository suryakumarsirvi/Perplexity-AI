import {createBrowserRouter, Navigate} from 'react-router'
import PublicRoutes from '../guards/PublicRoutes'
import PrivateRoutes from '../guards/PrivateRoutes'
import AuthLayout from '../features/auth/pages/AuthLayout'
import Home from '../features/main/pages/Home'

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
        path: '/home',
        element: 
        <PrivateRoutes>
            <Home/>
        </PrivateRoutes>
    }
]);

export default Router;