import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";

const PrivateRoutes = () =>{
    const {user} = useContext(AuthContext)

    return user ? <Outlet /> : <Navigate to={'/login'} />
}

// const PrivateRoute = ({children, ...rest}) => {
//     let {user} = useContext(AuthContext)
//     return(
//         <Route {...rest}>{!user ? <Redirect to="/login" /> :   children}</Route>
//     )
// }

export default PrivateRoutes