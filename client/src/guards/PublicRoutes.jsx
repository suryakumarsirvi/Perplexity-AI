import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PublicRoutes = ({children})=>{
    const { isAuthenticated } = useSelector(state => state.auth);

    return isAuthenticated ? <Navigate to="/home" /> : children;
}

export default PublicRoutes;