import {createBrowserRouter, Navigate} from 'react-router'
import PublicRoutes from '../guards/PublicRoutes'
import AuthLayout from '../features/auth/pages/AuthLayout'

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
    }
])