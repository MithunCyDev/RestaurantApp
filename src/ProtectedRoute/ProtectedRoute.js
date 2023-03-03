import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children, user})=>{
    if(!user){
       return <Navigate to='/' replace />
    }
    else return children;

};

export default ProtectedRoute;