import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth} from 'firebase/auth'
export const PrivetOutlet = ({ children }) => {
  
    // let { user } = useAuth();
    // if (user) {
    //   return <Outlet />;
    // } else {
    //   return <Navigate to="/home" />;
    // }

  
}
