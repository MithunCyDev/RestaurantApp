import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({children, user})=>{
    if(!user){
       return <Navigate to='/' replace />
    }
    else return children;

};

export const OrderProtectedRoute = ({children, user})=>{
    if(!user){
        alert("You Should Login First")
       return <Navigate to='/home' replace /> 
    }
    else return children;

};

