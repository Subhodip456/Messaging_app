import React from 'react'
import {Navigate, Outlet} from "react-router-dom"




const ProtectedRoutes = ({isAuth}) => {
    // const [auth,setAuth]=useState(true)
    // const [isAuth,login,logout,register] = userAuth(false)
    return isAuth ? <Outlet /> : <Navigate to="/home" />;
  }
  
export default ProtectedRoutes

