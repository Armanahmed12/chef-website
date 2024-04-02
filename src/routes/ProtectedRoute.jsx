import React, { useContext } from 'react';
import { AuthenticationData } from '../inforProviders/AuthInfoProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthenticationData);
    let location = useLocation();

    if(loading){
       
        return <span className="loading loading-spinner text-primary"></span>;

    }
    if(!user){
        return <Navigate to='/logIn' state={{ from: location }} replace={true}/>
    }
    return children;
};

export default ProtectedRoute;